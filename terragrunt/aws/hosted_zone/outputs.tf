output "hosted_zone_id_en" {
  description = "Route53 hosted zone ID that will hold our DNS records"
  value       = aws_route53_zone.cds_website_en.zone_id
}

output "hosted_zone_id_fr" {
  description = "Route53 hosted zone ID that will hold our French DNS records"
  value       = aws_route53_zone.cds_website_fr.zone_id
}