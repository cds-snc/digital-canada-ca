variable "buckets" {
  description = "The two S3 buckets that will hold EN and FR content respectively"
  type    = set(string)
  default = ["cds-website-english-s3-bucket", "cds-website-french-s3-bucket"]
}