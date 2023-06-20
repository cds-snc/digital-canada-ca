locals {
  website_subdomains = var.website_domains
  regional_domains = flatten([for buckets, domain in module.s3_buckets : [
    domain
  ]])
}

output "s3_bucket_regional_domain_name" {
  description = "The regional domain names of the buckets that will be used as Cloudfront origin Id"
  value = tomap({
    for ind, domain in local.regional_domains : local.website_subdomains[ind] => domain.s3_bucket_regional_domain_name
  })
}

output "s3_buckets" {
  description = "EN and FR S3 Buckets"
  value       = module.s3_buckets
}