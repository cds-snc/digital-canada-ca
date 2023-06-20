variable "s3_bucket_regional_domain_name" {
  description = "The regional domain names of the buckets that will be used as Cloudfront origin Id"
  type        = map(string)
}

variable "website_domains" {
  description = "Website subdomains used for testing purposes"
  type        = list(string)
  default     = ["digital.cdssandbox.xyz", "numerique.cdssandbox.xyz"]
}

variable "hosted_zone_id_list" {
  description = "The hosted zone ID that holds our English and French DNS records"
  type        = list(string)
}

variable "s3_buckets" {
  description = "EN and FR S3 Buckets"
  type        = map(any)
}