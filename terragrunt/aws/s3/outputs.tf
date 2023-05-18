output "s3_bucket_regional_domain_name" {
  description = "The regional domain names of the buckets that will be used as Cloudfront origin Id"
  value = tomap({
    for k, domain in module.s3_buckets : k => domain.s3_bucket_regional_domain_name
  })
}