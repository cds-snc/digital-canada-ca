workflow "New workflow" {
  on = "push"
  resolves = ["Process images"]
}

action "Filter master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "not branch master"
}

action "Process images" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = ["Filter master"]
  args = "Processed images"
  secrets = ["GITHUB_TOKEN"]
}
