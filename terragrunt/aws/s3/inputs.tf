variable "buckets" {
  type    = set(string)
  default = ["cds-website-english-s3-bucket", "cds-website-french-s3-bucket"]
}