#Jam Boilerplate

####A simple, lightweight boilerplate to help kick start your front-end projects.

* Scaleable directory structure with clear partitions between thirdparty libraries, plugins and project files.
* Focus on structural granularity with easy to understand assignment of responsibility.
* Set up using SASS and Compass (http://compass-style.org/).
* Integrates seamlessly with [CodeKit](http://incident57.com/codekit/) for all your concatenation and minification needs.

##Suggested Usage

* Work with the structure.
* Consistency, granularity and scalability are the core focus in the structure of this boilerplate.
* A *graphics* folder and an *images* folder. If it's referenced as a background-image, it goes in the graphics folder. If it's referenced as the src of an img element, it goes in the images folder.
* Keep it consistent and adopt the conventions laid out before you. If you are embedding plugins such as SWFs, put them in a embeds folder. If you are referencing videos, put them in a videos folder.
* If you own a Mac, get [CodeKit](http://incident57.com/codekit/). Enjoy the benefits.

##SASS Formatting

Section/Block Comments

```css
/* -------------------------------------------------------------- 
	Typography
-------------------------------------------------------------- */
```

Heading Line Comments

```css
/*** Header ***/
```

Single Line Comments

```css
// Navigation
```

##JavaScript Formatting

Function/Block Comments

```javascript
/**
 * Subscribe to an event with callback.
 * 
 * @param {String} key Dictionary key.
 * @param {Function} callback Function to call if found.
 * @returns {Boolean} success Whether or not a value was found.
 */
```

Heading Line Comments

```javascript
/**
 * Login function
 */
```

Single Line Comments

```javascript
// Check if the user is logged in.
```

