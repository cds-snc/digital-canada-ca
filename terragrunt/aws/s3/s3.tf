module "s3_buckets" {
  source      = "github.com/cds-snc/terraform-modules?ref=v5.1.8//S3"
  for_each    = var.buckets
  bucket_name = each.key

  logging = {
    target_bucket = module.log_bucket.s3_bucket_id
  }

  billing_tag_value = var.billing_code
}

module "log_bucket" {
  source            = "github.com/cds-snc/terraform-modules?ref=v5.1.8//S3_log_bucket"
  bucket_name       = "cds-website-s3-bucket-logs"
  billing_tag_value = var.billing_code
}

data "aws_iam_policy_document" "website_bucket_policy_doc" {
  for_each = module.s3_buckets
  statement {
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["${var.origin_access_identity}"]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "${each.value.s3_bucket_arn}/*"
    ]
  }

}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  for_each = module.s3_buckets
  bucket   = each.value.s3_bucket_id
  policy   = data.aws_iam_policy_document.website_bucket_policy_doc[each.key].json
}