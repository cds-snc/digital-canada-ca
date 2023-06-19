locals {
  vars = read_terragrunt_config("../env_vars.hcl")
}

# DO NOT CHANGE ANYTHING BELOW HERE UNLESS YOU KNOW WHAT YOU ARE DOING

inputs = {
  product_name                 = "digital-canada-website"
  account_id                   = "${local.vars.inputs.account_id}"
  env                          = "${local.vars.inputs.env}"
  region                       = "ca-central-1"
  billing_code                 = "${local.vars.inputs.billing_code}"
  domain                       = "${local.vars.inputs.domain}"
  fr_domain                    = "${local.vars.inputs.fr_domain}"
  cbs_satellite_bucket_name    = "cbs-satellite-${local.vars.inputs.account_id}"
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite"
  contents  = file("./common/provider.tf")

}

generate "common_variables" {
  path      = "common_variables.tf"
  if_exists = "overwrite"
  contents  = file("./common/common_variables.tf")
}

remote_state {
  backend = "s3"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    encrypt             = true
    bucket              = "${local.vars.inputs.billing_code}-tf"
    dynamodb_table      = "terraform-state-lock-dynamo"
    region              = "ca-central-1"
    key                 = "${path_relative_to_include()}/terraform.tfstate"
    s3_bucket_tags      = { CostCentre : local.vars.inputs.billing_code }
    dynamodb_table_tags = { CostCentre : local.vars.inputs.billing_code }
  }
}