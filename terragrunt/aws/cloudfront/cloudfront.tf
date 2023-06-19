resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "cloudfront origin access identity"
}

resource "aws_cloudfront_distribution" "distribution" {
  for_each            = var.s3_bucket_regional_domain_name
  default_root_object = "index.html"
  enabled             = true
  aliases             = [each.key]
  price_class         = "PriceClass_All"
  web_acl_id          = aws_wafv2_web_acl.cds_website_waf.arn

  default_cache_behavior {
    target_origin_id       = each.value
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods = [
      "GET",
      "HEAD",
    ]
    compress                   = true
    cache_policy_id            = local.cloudfront_cache_policy_optimized
    origin_request_policy_id   = local.cloudfront_origin_request_policy_cors_s3origin
    response_headers_policy_id = local.cloudfront_response_headers_policy_cors_preflight
  }
  origin {
    domain_name = each.value
    origin_id   = each.value
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }

  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cds_website_validation_certificate[each.key].certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
  logging_config {
    include_cookies = false
    bucket          = module.log_bucket.s3_bucket_domain_name
    prefix          = "cloudfront"
  }

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}