terraform {
    source = "../../../aws//s3"
}

dependencies {
    paths = ["../cloudfront"]
}

dependency "cloudfront" {
    config_path = "../cloudfront"
    mock_outputs_allowed_terraform_commands = ["init", "fmt", "validate", "plan", "show"]
    mock_outputs_merge_strategy_with_state  = "shallow"
    mock_outputs = {
        origin_access_identity = ""
    }
}

inputs = {
    origin_access_identity = dependency.cloudfront.outputs.origin_access_identity
}

include {
    path = find_in_parent_folders()
}