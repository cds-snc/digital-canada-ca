resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "cloudfront origin access identity"
}

resource "aws_cloudfront_distribution" "distribution" {
  for_each            = var.s3_bucket_regional_domain_name
  default_root_object = "index.html"
  enabled             = true

  default_cache_behavior {
    target_origin_id       = each.value
    viewer_protocol_policy = "allow-all"
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = [
      "GET",
      "HEAD",
    ]
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
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
      locations        = []
      restriction_type = "none"
    }

  }

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }
}