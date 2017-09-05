[jam-url]: https://getjam.io
[changelog-url]: http://getjam.io/changelog
<<<<<<< HEAD
[license-url]: https://github.com/zizther/Jam/blob/master/LICENSE.
[issues-url]: https://github.com/zizther/Jam/issues
[issues-new-url]: https://github.com/zizther/Jam/issues
[docs-url]: https://github.com/zizther/Jam/tree/master/docs
[normalize-url]: https://github.com/necolas/normalize.css
# [Jam](jam-url)
=======
[issues-url]: https://github.com/zizther/jam/issues
[nodejs-url]: https://nodejs.org
[normalize-url]: http://necolas.github.io/normalize.css
[homebrew-url]: http://brew.sh
#Jam
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

A simple, lightweight Sass responsive front-end framework to normalise browser behaviour for accessible websites.

<<<<<<< HEAD
## Features
=======
**Install with with Bower:**

```shell
$ bower install jam
```


##Features
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

Jam is meant to be a starting point for every website or web app:

* A responsive grid that can be customised to your needs.

* A solid base built on [Normalize.css](normalize-url) to fix cross-browser compatibility
  issues.

* Consistently styled buttons that work with `<a>` and `<button>` elements.

* Styles for vertical and horizontal menus, including support for dropdown
  menus.

* Useful form alignments that look great on all screen sizes.

* Various common table styles.

* An extremely minimalist look that is super-easy to customise.

* Responsive by default, with a non-responsive option.

* Easy customisation.

<<<<<<< HEAD
---

## Quick setup
=======

##Get Started

To get started using Jam, go to [getjam.io][jam-url]. The website has documentation and examples necessary to get you started using Jam.
##Using CSS files

To use the CSS file directly in your project you can reference it by using
`<link href="/css/styles.css" rel="stylesheet">`

##Using Scss files

If you want to use the Scss files you can compile them using the gulp file in this project ([Find out more here](#frontend)) or use your own tasks to fit within your project.


##Browser Support and Testing

Jam is tested and works in:

* IE 11+
* Edge 12+
* Latest 2 stable versions: Firefox, Chrome, Safari
* iOS 8.x+
* Android 4.x

*IE9 & 10 are not officially supported, however Jam may work without any issues.*

##Docs and guidelines

Docs and guidelines can be found at [getjam.io][jam-url]

##Changelog

[View the changelog][changelog-url]

##Bugs and feature requests
Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue][issues-url].

---

# Frontend{#frontend}
To compile and optimse the assets in the site you will need to use gulp. You will need Node with NPM installed.

## Install Node
[Download node JS][nodejs-url]
This will also install NPM

If you have issues with Node or NPM try installing it with [homebrew][homebrew-url]

	brew install node --without-npm
	echo prefix=~/.node >> ~/.npmrc
	curl -L https://www.npmjs.org/install.sh | sh

Node and npm should be correctly installed at this point. The final step is to add ```~/.node/bin``` to your PATH so commands you install globally are usable. This should be added to your ```~/.bash_profile```.

	export PATH="$HOME/.node/bin:$PATH"
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

### Install the project node modules
Go to the project root and run

	npm install

### Update project node modules
Run this command at the project root

	npm update

<<<<<<< HEAD
### Using Gulp
There are 3 tasks available:
=======
## Using Gulp
There are 2 tasks available:
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

	gulp

This will perform the watch function to compile the Sass as you develop

	gulp build

<<<<<<< HEAD
This will compile the Sass and optimise the CSS.

### Gulp notifications
=======
## Gulp notifications
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe
Automatic desktop notifications for gulp messages, errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send.

---

## Documentation

View full [documentation here](jam-url)

---

## Changelog

[View the changelog](changelog-url)

---

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](issues-new-url).

---

## Troubleshooting

Should you encounter problems with installing dependencies or running scripts, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

---

## License

This software is free to use under the MIT license.
See the [LICENSE file](license-url) for license text and copyright information.

## Copyright and license

Code released under the [MIT license](license-url). Docs released under [Creative Commons](license-url).
