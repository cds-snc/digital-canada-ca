terraform {
    source = "../../../aws//s3"
}

include {
    path = find_in_parent_folders()
}