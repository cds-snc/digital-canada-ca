resource "aws_route53_record" "cds_website_en_A" {
  name    = local.name_en
  zone_id = local.hosted_zone_en
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution[local.name_en].domain_name
    zone_id                = aws_cloudfront_distribution.distribution[local.name_en].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cds_website_fr_A" {
  name    = local.name_fr
  zone_id = local.hosted_zone_fr
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution[local.name_fr].domain_name
    zone_id                = aws_cloudfront_distribution.distribution[local.name_fr].hosted_zone_id
    evaluate_target_health = false
  }
}

locals {
  hosted_zone_en = var.hosted_zone_id_list[0]
  hosted_zone_fr = var.hosted_zone_id_list[1]
  name_en        = var.website_domains[0]
  name_fr        = var.website_domains[1]
}