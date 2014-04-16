# Jam
 
#### A simple, lightweight boilerplate to help kick start your front-end projects.
 
* Scaleable directory structure with clear partitions between thirdparty libraries, plugins and project files.
* Heavy focus on structural granularity with intuitive delegation of responsibility.
* Set up requires [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/).
* Integrates seamlessly with [CodeKit](http://incident57.com/codekit/) for all your concatenation and minification needs. It does not require Codekit to be used.
 
## Suggested Usage
 
* Add this to the public root of your project.
* Work with the structure, not against it. Considerable time and thought has been invested in the structure of this boilerplate with the core focus on consistency, granularity and scalability.
* A *graphics* folder? In a nutshell, if it's referenced as a background-image, it goes in the graphics folder. If it's referenced as the src of an img element, it goes in an uploads or images folder.
* Keep it consistent and adopt the conventions laid out before you. If you are embedding plugins such as SWFs, put them in a embeds folder. If you are referencing videos, put them in a videos folder.
* If you own a Mac and don't fancy using the Terminal, get [CodeKit](http://incident57.com/codekit/).

## Install
1. You can either pull the repo or use [Bower](http://bower.io/) to get a copy of the boilerplate ``bower install jam``.
2. Once you have a copy, move the contents of the Jam directory into the website public directory.

## Guide
1. a ``.editorconfig`` file has been included to define and maintain consistent coding styles between different editors and IDEs [editorconfig.org](http://editorconfig.org).
2. A .htaccess file has been provided, with additions to include into your project if you need them. Remove the underscore in the file name to use this.
3. Add the ``css`` (assets/css) folder to Codekit or perform your watch action in this directory from Terminal. A config.rb has been provided for the Compass setup (there is no need to change this file as it will be required for other developers setups, only modify if you need to add dependencies, etc).
	* By default only SASS will be monitored by Codekit, if you want Codekit to manage your JS add the folder to Codekit manually.
4. The JS directory has a basic structure, if you are using Backbone and/or require JS you may want to replace this setup.
5. [Compass](http://compass-style.org/) is require for this project, make sure you have this installed if your not using Codekit. Compass provides a wide range of mixins, familiarise yourself with them.
	
	The boilerplate has additional mixins included, make sure to have a look at these and familiarise yourself with them. You can find the [documentation for these here](mixin.md)
6. Jam offers a few components. These have been developed to help reduce browser inconsistency and enable you to develop faster.
All components are being called into the style.scss file. If you do not require any of the components, simply comment that line out.

	Components:
	* Alerts
	* Component animation
	* Forms
	* Tables

	
## SASS structure
The SASS structure for this boilerplate should remain like this and all assosiated code should be put into its relveant file.
All imported files should contain an undercore '_' at the start so they do not compile directly.

```
css/
	styles.css  (This is the compiled CSS)
	sass/
		core/
			_alerts.scss  (Setup for alerts)
			_component_animation.scss  (Setup for CSS animation)
			_forms.scss  (Setup for forms)
			_print.scss  (Print styles)
			_reset.scss  (Reset CSS, using normalise)
			_tables.scss  (Setup for tables)
		mixins/
			_mixins.scss  (Contains additions mixins)
			_screen_mixins.scss   (Device screen size mixins)
		project/
			_display.scss  (Setup for media queries)
			_global.scss  (The general styles - Where the bulk if the styles go)
			_sprites.scss  (Add in your sprite image calls here so they are global)
			_xbrowser.scss  (Add any x-browser hacks here)
		variables/
			_variables.scss  (Variables for the project)
			_easing.scss  (Easing variables)
		styles.scss  (This pulls in all the different elements for the project to output as CSS)
```

## Bower components
If you used Bower to install Jam, it will also pull in some other packages for your con

* Backbone
* Underscore
* Require JS
* Animate.css
* WOW JS