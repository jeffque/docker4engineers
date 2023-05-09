# Docker 4 engineers

Slides: <https://jeffque.github.io/docker4engineers/>

# How to Run

- clone the repo
- install the dependencies `yarn`
- run `yarn start`
- open `http://localhost:8080` and see the slides

# Publishing

```bash
yarn publish:deck
```

It will publish to your github pages from your repo (branch `gh-pages2` because reasons).

# Caveats

The `pdf` does not perfectly works with code surfer, be aware.

To build locally, you need to run `yarn postinstall` before `yarn build`. This
is not necessary for running the repo.