terraform {
    source = "../../../aws//hosted_zone"
}
include {
    path = find_in_parent_folders()
}