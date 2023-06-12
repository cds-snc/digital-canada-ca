module "log_bucket" {
  source            = "github.com/cds-snc/terraform-modules?ref=v5.1.8//S3_log_bucket"
  bucket_name       = "cds-website-waf-bucket-logs"
  billing_tag_value = var.billing_code
}