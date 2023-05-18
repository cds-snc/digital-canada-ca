output "s3_bucket_regional_domain_name" {
  value = tomap({
    for k, domain in module.s3_buckets : k => domain.s3_bucket_regional_domain_name
  })
}