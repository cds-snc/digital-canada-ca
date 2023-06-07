resource "aws_acm_certificate" "cds_website_statement_certificate" {
  for_each                 = var.website_domains
  provider                 = aws.us-east-1
  domain_name              = each.value
  subject_alternative_name = ["*.${each.value}"]
  validation_method        = "DNS"
  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
  lifecycle {
    create_before_destroy = true
  }
}