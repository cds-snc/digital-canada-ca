resource "aws_route53_record" "cds_website_A" {
    for_each = aws_cloudfront_distribution.distribution
    name = each.key
    zone_id = each.value.hosted_zone_id
    type = "A"

    alias {
        name = each.value.domain_name
        zone_id = each.value.hosted_zone_id
        evaluate_target_health = false
    }
}

