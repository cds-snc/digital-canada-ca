output "origin_access_identity" {
  description = "Cloudfront origin access identity"
  value       = aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn
}