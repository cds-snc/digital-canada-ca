resource "aws_wafv2_web_acl" "cds_website_waf" {
  provider = aws.us-east-1

  name        = "cds_website_waf"
  description = "WAF for CDS Website"
  scope       = "CLOUDFRONT"

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }

  default_action {
    allow {}
  }

  rule {
    name     = "AWSManagedRulesAmazonIpReputationList"
    priority = 10

    override_action {
      none {}
    }


    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesAmazonIpReputationList"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesAmazonIpReputationList"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "RateLimit"
    priority = 20

    action {
      block {}
    }


    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimit"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 30

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWSManagedRulesKnownBadInputsRuleSet"
    priority = 40

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesKnownBadInputsRuleSet"
        vendor_name = "AWS"

      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesKnownBadInputsRuleSet"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "api"
    sampled_requests_enabled   = false
  }
}

resource "aws_cloudwatch_log_group" "cds_website_waf" {
  name              = "/aws/kinesisfirehose/cds_website_waf"
  retention_in_days = 14

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }
}

resource "aws_kinesis_firehose_delivery_stream" "cds_website_waf" {
  provider    = aws.us-east-1
  name        = "aws-waf-logs-cds-website"
  destination = "extended_s3"

  server_side_encryption {
    enabled = true
  }

  extended_s3_configuration {
    role_arn           = aws_iam_role.waf_log_role.arn
    prefix             = "waf_acl_logs/AWSLogs/${var.account_id}/"
    bucket_arn         = local.cbs_satellite_bucket_arn
    compression_format = "GZIP"

    cloudwatch_logging_options {
      enabled         = true
      log_group_name  = aws_cloudwatch_log_group.cds_website_waf.name
      log_stream_name = "WAFLogS3Delivery"
    }
  }

  tags = {
    CostCentre = var.billing_code
    Terraform  = true
  }


}

resource "aws_wafv2_web_acl_logging_configuration" "cds_website_waf" {
  provider                = aws.us-east-1
  log_destination_configs = [aws_kinesis_firehose_delivery_stream.cds_website_waf.arn]
  resource_arn            = aws_wafv2_web_acl.cds_website_waf.arn
}