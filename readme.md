# Jam
 
#### A simple, lightweight boilerplate to help kick start your front-end projects.
 
* Scaleable directory structure with clear partitions between thirdparty libraries, plugins and project files.
* Heavy focus on structural granularity with intuitive delegation of responsibility.
* Set up requires [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/).
* Integrates seamlessly with [CodeKit](http://incident57.com/codekit/) for all your concatenation and minification needs.
 
## Suggested Usage
 
* Work with the structure, not against it. Considerable time and thought has been invested in the structure of this boilerplate with the core focus on consistency, granularity and scalability.
* A *graphics* folder and an *images* folder, what's that all about? In a nutshell, if it's referenced as a background-image, it goes in the graphics folder. If it's referenced as the src of an img element, it goes in the images folder.
* Keep it consistent and adopt the conventions laid out before you. If you are embedding plugins such as SWFs, put them in a embeds folder. If you are referencing videos, put them in a videos folder.
* If you own a Mac, get [CodeKit](http://incident57.com/codekit/). It will literally change your developing life.

## The 1,2,3's

1. Install the project from bower ``bower install jam``
	* You can also create a custom function in your .bash_profile to install the package and sort the directories.
2. Add the assets folder to Codekit, the codekit-config.json file will setup the project output directories and minification suffix for JS. The config.rb will handle the compass and SASS output (Do not change these files as they will be required for other developers setups).
	* Codekit has not yet got the ability to not compile all JS, so when adding JS make sure to set it to not 'compile directly'. Only compress files which will be used, 'main.js' will alwatys be compressed even with imports.
3. Make sure to combine JS file, for this use the [import function for Codekit](http://incident57.com/codekit/help.php#help-imports). Place ``//@codekit-prepend "file-a.js", "file-b.js"`` in the file rather than using the 'drag & drop' feature or Codekit settings as these won't be avaliabel for other developers. Note: you MUST comment out these lines because they are not valid Javascript. Don't worry, CodeKit will still detect them just fine.