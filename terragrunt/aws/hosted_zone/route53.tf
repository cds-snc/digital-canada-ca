resource "aws_route53_zone" "cds_website_en" {
  name = var.domain
  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}

resource "aws_route53_zone" "cds_website_fr" {
  name = var.fr_domain
  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}