[jam-url]: http://getjam.io
[license-url]: https://github.com/zizther/jam/blob/master/LICENSE.md
[changelog-url]: http://getjam.io/changelog
[issues-url]: https://github.com/zizther/jam/issues
[nodejs-url]: https://nodejs.org
[yeoman-url]: http://yeoman.io
[normalize-url]: http://necolas.github.io/normalize.css
[homebrew-url]: http://brew.sh
#Jam

A simple, lightweight gulp-based HTML & Sass responsive front-end framework to help kick start all your projects.
###[getjam.io][jam-url]###



**Install with Yeoman:**

_You must have [Node][nodejs-url] and [Yeoman][yeoman-url] installed,_

```shell
$ npm install -g generator-jam
```

```shell
$ yo jam
```

**Alternatively you can install with Bower:**

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

# Frontend
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


## Install the project node modules
Go to the project root and run

	npm install

## Update project node modules
Run this command at the project root

	npm update

## Using Gulp
There are 3 tasks available:

	gulp

This will perform the watch function to compile the CSS and run other functions

	gulp build

This will compile and optimise the CSS, optimise images and handle any JS stuff.
This should not be run manually. It is designed to only be used when merging with specific branches

	gulp info

This will display all tasks available to you.

## Gulp notifications
Automatic desktop notifications for gulp messages, errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send.

#### Mac

#####  OS X Notification System

*Support Included.*

If you are using OS X 10.8 Mountain Lion or newer a notification system is built in, but Apple does not provide a
notification API that Node can access. Only code written in Objective C and signed in XCode can access it.
This is not very friendly for Node users so we are using the tiny signed MIT-licensed native application
[Terminal Notifier](https://github.com/alloy/terminal-notifier) from [Eloy Durán](https://github.com/alloy).

##### Growl for OS X

*Requires growlnotify for OS X.*

Install **growlnotify** from the [Growl Downloads Page](http://growl.info/downloads). This will install in `/usr/local/bin/growlnotify`.

#### Windows

##### Snarl

*Included with Snarl.*

If you have downloaded and installed Snarl from [Snarl's web site](http://snarl.fullphat.net/) you'll have the commandline tool heysnarl as well.

##### Growl for Windows

*Requires growlnotify for Windows.*

Install **growlnotify** from the [growlnotify Page](http://www.growlforwindows.com/gfw/help/growlnotify.aspx).

##### Windows 8.1 Notifications

*Nothing to install.*

Create a pull request!

#### Linux

##### Notify-Send

*Nothing to install.*

I created an Ubuntu virtual machine and it had `notify-send` in the path.

I don't use Linux frequently so I don't know if this utility is available for other distros.

[notify-send man page](http://manpages.ubuntu.com/manpages/gutsy/man1/notify-send.1.html).

`notify-send` has an addition `duration` option which takes a number seconds. The default is 3 seconds.

Duration doesn't work natively on some versions of Ubuntu.

Here is a fix: http://askubuntu.com/questions/128474/how-to-customize-on-screen-notifications

#### Chrome

*Not supported yet.*

Chrome has a notification system but I'm not sure if it's possible to use from a command-line Node app. Somebody could
probably create a Chrome Plugin helper for this.

---

##License

This software is free to use under the MIT license.
See the [LICENSE file][license-url] for license text and copyright information.
