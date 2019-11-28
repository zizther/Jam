[product]: Jam
[license-url]: https://github.com/zizther/Jam/blob/master/LICENSE
[issues-url]: https://github.com/zizther/Jam/issues
[issues-new-url]: https://github.com/zizther/Jam/issues
[docs-url]: https://github.com/zizther/Jam/tree/master/docs
[normalize-url]: https://github.com/sindresorhus/modern-normalize
# Jam

A simple, lightweight Sass responsive front-end framework to normalise browser behaviour for accessible websites.

---

## Features

Jam is meant to be a starting point for every website or web app:

* A solid base built on [modern-normalize][normalize-url] to fix cross-browser compatibility
  issues.

* A responsive grid that can be customised to your needs.

* Consistently styled buttons that work with `<a>` and `<button>` elements.

* Useful form alignments that look great on all screen sizes.

* Table styles.

* An extremely minimalist look that is super-easy to customise.

* Responsive by default.

* Easy customisation.

* Includes a collection of helpful functions and mixins.

* 7kb when gzipped/deflated.

---

## Quick setup

### Install the project node modules
Go to the project root and run

	npm install

### Update project node modules
Run this command at the project root

	npm update

### Using Gulp
There are 2 tasks available:

	gulp

This will perform the watch function to compile the Sass as you develop

	gulp build

This will compile the Sass and optimise the CSS.

### Gulp notifications
Automatic desktop notifications for gulp messages, errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send.

---

## Documentation
To compile and optimse the assets in the site you will need to have Gulp and other packages installed. To do this you will need Node with NPM installed and Gulp.

---

## Browser support
Jam looks to support support all major browsers and IE11.
Autoprefixer is used to add support for browsers, it can be amended if you need to support other versions of browsers.

---

## Structure
Jam is self contained. Variables can be overridden to update the styles via `scss/app/_variables.scss`
A base set of components (`scss/components`) have been included, but you can add more as you develop your project.

---

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue][issues-new-url].

---

## Copyright and license
This software is free to use under the MIT license.
See the [LICENSE file][license-url] for license text and copyright information.


Code released under the [MIT license][license-url]. Docs released under [Creative Commons][license-url].
