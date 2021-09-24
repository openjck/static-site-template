# static-site-template

static-site-template is a template for static websites which are deployed to
Netlify. It uses Parcel to optimize assets and includes support for TypeScript,
ESLint, Stylelint, Prettier, and Google Analytics.

(Netlify can optimize assets on its own, but using Parcel makes this template
more portable to other hosts.)

I mainly created this template for my own use, but it might also be a nice
foundation for your static site. If you don't plan to use Netlify or Google
Analytics (or TypeScript or ESLint or whatever) you can easily remove support
for them.

## Usage

To create a new project based on this template, run the following:

```sh
npx degit openjck/static-site-template static-site
rm static-site/UNLICENSE static-site/README.md
```
