workflow "New workflow" {
  on = "push"
  resolves = [
    "Process images commit",
    "Process images",
  ]
}

action "Filter master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "not branch master"
}

action "Images touched?" {
  uses = "docker://cdssnc/touched-github-action"
  needs = ["Filter master"]
  args = "{**jpg,**png}"
}

action "Process images commit" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = ["Process images"]
  args = "Skip CI - Processed images"
  secrets = ["GITHUB_TOKEN"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Images touched?"]
  args = "install"
}

action "Process images" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run process:images"
}
