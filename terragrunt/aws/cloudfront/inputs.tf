variable "s3_bucket_regional_domain_name" {
  description = "The regional domain names of the buckets that will be used as Cloudfront origin Id"
  type        = map(string)
}

variable "website_domains" {
  description = "Website subdomains used for testing purposes"
  type        = set(string)
  default     = ["digital.cdssandbox.xyz", "numerique.cdssandbox.xyz"]
}