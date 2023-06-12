resource "aws_acm_certificate" "cds_website_statement_certificate" {
  for_each = {
    for domain in var.website_domains : domain => {
      domain = domain
    }
  }
  provider                  = aws.us-east-1
  domain_name               = each.value.domain
  subject_alternative_names = ["*.${each.value.domain}"]
  validation_method         = "DNS"

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
  lifecycle {
    create_before_destroy = true
  }
}

locals {
  record_values = flatten([
    for ind, doms in var.website_domains : [
      for key, dvo in aws_acm_certificate.cds_website_statement_certificate[var.website_domains[ind]].domain_validation_options : {
        ind = ind + 1
        zone_id = var.hosted_zone_id_list[ind]
        name    = dvo.resource_record_name
        type    = dvo.resource_record_type
        record  = dvo.resource_record_value
      }
    ]
  ])
}
resource "aws_route53_record" "cds_website_dns_validation" {
    for_each = {for i, vals in local.record_values : i => vals}
    allow_overwrite = true
    zone_id = each.value.zone_id
    name = each.value.name
    type = each.value.type
    records = [each.value.record]
    ttl = 60

}

resource "aws_acm_certificate_validation" "cds_website_validation_certificate" {
    provider = aws.us-east-1
    for_each = aws_acm_certificate.cds_website_statement_certificate
    certificate_arn = each.value.arn
    validation_record_fqdns = [for record in aws_route53_record.cds_website_dns_validation : record.fqdn]
}