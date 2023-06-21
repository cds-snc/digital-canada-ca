locals {
  cbs_satellite_bucket_arn = "arn:aws:s3:::${var.cbs_satellite_bucket_name}"
  # https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html#managed-cache-caching-optimized
  cloudfront_cache_policy_optimized = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  # https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html#managed-origin-request-policy-cors-s3
  cloudfront_origin_request_policy_cors_s3origin = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"
  # https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-response-headers-policies.html#managed-response-headers-policies-cors-preflight
  cloudfront_response_headers_policy_cors_preflight = "5cc3b908-e619-4b99-88e5-2cf7f45965bd"
}