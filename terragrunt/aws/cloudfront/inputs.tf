variable "s3_bucket_regional_domain_name" {
  description = "The regional domain names of the buckets that will be used as Cloudfront origin Id"
  type        = map(string)
}