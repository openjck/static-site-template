# static-site-template

static-site-template is the template I use for my own static websites, which are
pretty simple. I deploy my static sites to [Netlify](https://www.netlify.com/),
so Netlify configuration is included. The template also uses
[Parcel](https://parceljs.org/) to optimize assets and
[Biome](https://biomejs.dev/) to lint and format code. Support for [Umami
analytics](https://umami.is/) is included.

(Netlify can optimize assets on its own, but using Parcel makes this template
more portable to other hosts.)

## Usage

To create a new project based on this template, run the following:

```sh
npx degit openjck/static-site-template static-site
rm static-site/UNLICENSE static-site/README.md
```
