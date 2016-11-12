[jam-url]: http://getjam.io
[license-url]: https://github.com/zizther/jam/blob/master/LICENSE.md
[changelog-url]: http://getjam.io/changelog
[nodejs-url]: https://nodejs.org
[gulp-url]: https://gulpjs.com
[yeoman-url]: http://yeoman.io
[normalize-url]: http://necolas.github.io/normalize.css
[homebrew-url]: http://brew.sh
#Jam

A simple, lightweight gulp-based HTML & Sass responsive front-end framework to help kick start all your projects.
###[getjam.io][jam-url]###


**Install with Yeoman:**

_You must have [Node][nodejs-url], [Gulp][gulp-url] and [Yeoman][yeoman-url] installed,_

```shell
$ npm install -g generator-jam
```

```shell
$ yo jam
```

**Alternatively you can install the Sass without Gulp and NPM**

```shell
$ bower install jam
```


##Features

Jam is meant to be a starting point for every website or web app:

* A responsive grid that can be customised to your needs.

* A solid base built on [Normalize.css][normalize-url] to fix cross-browser compatibility
  issues.

* Consistently styled buttons that work with `<a>` and `<button>` elements.

* Styles for vertical and horizontal menus, including support for dropdown
  menus.

* Useful form alignments that look great on all screen sizes.

* Various common table styles.

* An extremely minimalist look that is super-easy to customise.

* Responsive by default, with a non-responsive option.

* Easy customisation.


##Get Started

To get started using Jam, go to [getjam.io][jam-url]. The website has documentation and examples necessary to get you started using Jam.


##Browser Support and Testing

Jam is tested and works in:

* IE 8+
* Latest Stable: Firefox, Chrome, Safari
* iOS 6.x+
* Android 4.x


##Docs and guidelines

Docs and guidelines can be found at [getjam.io][jam-url]

##Changelog

[View the changelog][changelog-url]

---

# Frontend
To compile and optimse the assets in the site you will need to have Gulp and other packages installed. To do this you will need Node with NPM installed and Gulp

## Install Node
[Download node JS][nodejs-url]
This will also install NPM

If you have issues with Node or NPM try installing it with [homebrew][homebrew-url]

	brew install node --without-npm
	echo prefix=~/.node >> ~/.npmrc
	curl -L https://www.npmjs.org/install.sh | sh
	
Node and npm should be correctly installed at this point. The final step is to add ```~/.node/bin``` to your PATH so commands you install globally are usable. This should be added to your ```~/.bash_profile```.

	export PATH="$HOME/.node/bin:$PATH"


## Install the project node modules
Go to the project root and run

	npm install
	
## Update project node modules
Run this command at the project root

	npm update
	
## Using gulp
There are 3 tasks available:

	gulp
	
This will perform the watch function to compile the CSS and run other functions

	gulp build
	
This will compile and optimise the CSS, optimise images and handle any JS stuff.
This should not be run manually. It is designed to only be used when merging with specific branches

	gulp info
	
This will display all tasks available to you.

## Gulp notifications
Automatic desktop notifications for Gulp errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send.

---

##License

This software is free to use under the MIT license.
See the [LICENSE file][license-url] for license text and copyright information.