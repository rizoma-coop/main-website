# Rizoma Website

## Installation

- Make sure you have [Jekyll](https://jekyllrb.com/docs/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
- Install JS dependencies:
```
npm install
```
- Build the site and make it available on a local server:
```
bundle exec jekyll serve
```
- Browse to http://localhost:4000

## Development

- The site is based on the [Bulma Clean Theme](https://github.com/chrisrhymes/bulma-clean-theme) Jekyll template which uses the [Bulma CSS framework](https://bulma.io/documentation/).

- It uses the [Jekyll Multiple Languages plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin). Translations should go in the `_i18n` folder.

- To rebuild the Javascript bundle:
```
npx webpack
```

## Deployment

- Push the `master` branch to Github 💁‍♂️