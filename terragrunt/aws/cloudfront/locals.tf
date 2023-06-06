locals {
  cbs_satellite_bucket_arn = "arn:aws:s3:::${var.cbs_satellite_bucket_name}"

  #   cloudfront_variables = flatten([
  #     for regional_domain_names in var.s3_bucket_regional_domain_name: [
  #         for site_domains in var.website_domains: {
  #             s3_regional_domain = "${}"
  #         }
  #     ]
  #   ])
}