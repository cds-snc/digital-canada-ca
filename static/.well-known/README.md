This folder is related to https://securitytxt.org/ - a proposed standard which allows websites to define security policies.

## To modify the file

If you modify the file you will need to sign it again and publish the key you used.

1. Install gpg
1. Clean up the security.txt from the PGP signature
2. Delete the public key in the repository
3. Create your own key `gpg --gen-key` and save the public key under the repository `gpg --export -a "security@cds-snc.ca" > pub.asc`
4. Sign the file `gpg --clearsign -o security.txt.pgp security.txt`
4. Remove the old security.txt, rename the new signed file to security.txt and push to the repository with the new public key
