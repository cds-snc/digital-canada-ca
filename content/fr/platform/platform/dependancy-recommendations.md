---
title: FR Dependency recommendations
translationKey: dependancy-recommendations
description: >-
  FR Not All dependancy packages are created equal. The dependency checker is a continuous integration tool that extracts all the javascript packages listed in your package.json files and runs them against the npms.io api. If the package score less than a 0.4 then the tool will create an issue in your repo, alerting you that you might want to review the package before using it. This tool can not only help ensure that your packages will remain supported and updated in the future but help validate that the packages you have chosen are secure and safe to use. 
phase: beta
contact:
  - email: bryan.willey@tbs-sct.gc.ca
    name: Bryan Willey
status: in-flight
links:
  - name: GitHub
    url: 'https://github.com/cds-snc/dependency-checker'
---

