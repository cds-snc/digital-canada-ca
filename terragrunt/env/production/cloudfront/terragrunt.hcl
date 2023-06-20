terraform {
    source = "../../../aws//cloudfront"
}

dependencies {
    paths = ["../s3", "../hosted_zone"]
}

dependency "s3" {
    config_path = "../s3"
    mock_outputs_allowed_terraform_commands = ["init", "fmt", "validate", "plan", "show"]
    
    mock_outputs = {
        s3_bucket_regional_domain_name = []
        s3_buckets = []
    }
}

dependency "hosted_zone" {
    config_path = "../hosted_zone"
    mock_outputs_allowed_terraform_commands = ["init", "fmt", "validate", "plan", "show"]
    
    mock_outputs = {
        hosted_zone_id_en = ""
        hosted_zone_id_fr = ""
    }
}


inputs = {
    s3_bucket_regional_domain_name = dependency.s3.outputs.s3_bucket_regional_domain_name
    hosted_zone_id_en = dependency.hosted_zone.outputs.hosted_zone_id_en
    hosted_zone_id_fr = dependency.hosted_zone.outputs.hosted_zone_id_fr
    hosted_zone_id_list = [dependency.hosted_zone.outputs.hosted_zone_id_en, dependency.hosted_zone.outputs.hosted_zone_id_fr]
    s3_buckets = dependency.s3.outputs.s3_buckets
}

include {
    path = find_in_parent_folders()
}