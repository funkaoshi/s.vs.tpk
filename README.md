# Save vs. Total Party Kill

This repository contains the contents of my weblog [Save. vs. Total Party
Kill][1]. The site is generated using [Hugo][2]. This repository probably
won't be of much interest to you unless you are interested in seeing how Hugo
works.

[1]: http://save.vs.totalpartykill.ca
[2]: https://gohugo.io/

## Publishing

Pushing to `master` deploys. `.github/workflows/deploy.yml` builds the site with Hugo
and rsyncs `public/` to funkaoshi.com — the same rsync the `Makefile` runs, so local and
CI can't drift. Manual runs (`workflow_dispatch`) default to the beta/staging host.

`make prod` still builds and deploys from the laptop, unchanged.
