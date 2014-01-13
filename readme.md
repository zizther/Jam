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

## Guide

1. You can either pull the repo or use [Bower](http://bower.io/) to get a copy of the boilerplate ``bower install jam``
	* ``cleanup.command`` is included to clean up the unessesary files, double click to run the command.
2. a ``.editorconfig`` file has been included to define and maintain consistent coding styles between different editors and IDEs [editorconfig.org](http://editorconfig.org).
3. A .htaccess file has been provided, with additions to include into your project if you need them.
4. Add the ``assets/css`` folder to Codekit or perform your watch action on this directory in Terminal. A config.rb has been provided for Compass setup and if you are using Codekit the codekit-config.json file whas been included to configure the project settings (There is no need to change these files as they will be required for other developers setups, only modify if you need to add dependencies, etc).
	* By default only SASS will be monitored by Codekit, if you want Codekit to manage your JS add the folder to Codekit manually.
5. The JS directory has a basic structure, if you are using Backbone and require JS you will want to replace this setup.
	* If you are using Codekit to manage the JS and are importing and/or combining mulitple JS files make sure to use the [import function for Codekit](http://incident57.com/codekit/help.php#help-imports). Place ``//@codekit-prepend "file-a.js", "file-b.js"`` and/or ``//@codekit-append "file-a.js", "file-b.js"`` in the file rather than using the 'drag & drop' feature inside the Codekit UI, otherwise these settings will not be avaliable for other developers working on the project. Note: you MUST comment out these lines because they are not valid Javascript. Don't worry, CodeKit will still detect them just fine.
6. SASS has been setup to work with [Compass](http://compass-style.org/), make sure you have this installed if your not using Codekit. Compass provides a wide range of mixins, familiarise yourself with them and how work and which ones you should use.
	
	The boilerplate has additional mixins included, make sure to have a look at these and familiarise yourself with them. You can find the [documentation for these here](mixin.md)
7. Variables and Core files. A set of variables have been setup in ``variables.scss`` these are provided to offer a base styling for any project and work with in conjunction with the projects and core scss files. Add any variables you want to use in the project in this file.

	Basic default styles have been setup for tables, forms, alerts and component_animation, these can all be found in the ``core`` directory. These provide a foundation to build on.
	If your not using all the core files you can comment them out from the ``styles.scss`` file so they are not included in the ouput.
	
## Sprites
Manage sprites using Compass. [Find out more here](http://compass-style.org/help/tutorials/spriting/).
Also watch these videos to get a clear idea of how to work with sprites in Compass.

* [Sprites in Compass](http://www.youtube.com/watch?v=Tl6bceyTjFw)
* [Advanced sprite config](http://www.youtube.com/watch?v=8ZHZPxIjiS8)

	
## SASS structure
The SASS structure for this boilerplate should remain like this and all assosiated code should be put into its relveant file.
All imported files should contain an undercore '_' at the start so they do not compile directly.

```
css/
	styles.css  (This is the compiled CSS)
	.sass/
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


## Easing
There is a variable file called _easing.scss which contains Robert Penner's easing functions converted into cubic-bezier timing functions. These will work with CSS3 transitons.

Here is an example of this being used.

```sass
@include single-transition(all, 500ms, $easeOutQuart, 0s);
```

* The first parameter is the transition property.
* The second parameter is the transition duration.
* The third parameter is the transition function (easing).
* The fourth parameter is the transition delay.