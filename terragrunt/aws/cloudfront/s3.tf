module "log_bucket" {
  source            = "github.com/cds-snc/terraform-modules?ref=v5.1.8//S3_log_bucket"
  bucket_name       = "cds-website-waf-bucket-logs"
  billing_tag_value = var.billing_code
}

data "aws_iam_policy_document" "website_bucket_policy_doc" {
  for_each = var.s3_buckets
  statement {
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
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
  for_each = var.s3_buckets
  bucket   = each.value.s3_bucket_id
  policy   = data.aws_iam_policy_document.website_bucket_policy_doc[each.key].json
}