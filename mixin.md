# Jam mixins
 
#### Documentation for the mixins included in the Jam boilerplate.
 
These mixins extend Compass, if you need to create a mixin for the project you are working on add it to the mixin.scss file in your project. If you feel there should be a mixin added to the boilerplate feel free to suggest something.
 
## HIDPI Media Query
The HIDPI Meda Query will allow you to generate a media query that targes HIDPI devices.
Default value set to 1.3 to target Google Nexus 7.

**Parameters**

1. ratio : Default is 1.3

**Example**
```sass
@include hidpi(2) {
	float: none;
	width: 500px;
}
```

## Retina Image
The retina image mixin allows you to generation the media query to include a retina sized image.

Note that the mixin assumes your retina files are always named with the @2x between the filename and the extension (logo.png and logo@2x.png) are are placed in the same directory.

Note the image path needs to be put in single quotes as it will contain a path. Do not put quotes around the any other parameter.

**Parameters**

1. File path
2. Image width
3. Image height
4. File extension : default .png

**Example**
```sass
@include retina-image('../graphics/logo', 300px, 100px);
```

## Font rem
CSS3 introduces the rem unit, which stands for "root em".

The em unit is relative to the font-size of the parent, which causes the compounding issue. The rem unit is relative to the root/html element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.

This mixin should be used everytime you set a font size. This will output the fon size in rem and px for older browsers.

**Parameters**

1. rem font size : Default is 1.6 (16px)

**Example**
```sass
@include font-rem(1.4);
```

## Center align
A shortcut to center align a block level element.

**Example**
```sass
@include center-block;
```

## Size
A shortcut to output the height and width width different values

**Parameters**
1. Width
2. Height

**Example**
```sass
@include size(300px, 200px);
```

## Square
A shortcut to output the height and width with the same value.

**Parameters**

1. Width/Height

**Example**
```sass
@include square(300px);
```

## Text overflow
Hide any text overflow. Requires inline-block or block for proper styling.

**Example**
```sass
@include text-overflow;
```

## CSS image replacement
Hide the text inside an element with a CSS image.

**Parameters**

1. Font : Default '~"0/0" a', this probably won't need to be changed.

**Example**
```sass
@include hide-text;
```

## Resize
Resize anything.

**Example**
```sass
@include resizeable;
```

## Hyphenation
Hyphenate text. More information on the [hyphens](http://css-tricks.com/almanac/properties/h/hyphenate/)

**Parameters**

1. Mode : Default is auto

**Example**
```sass
@include hyphens(all);
```

## Responsive image
Make an image fully responsive. This mixin keeps images from scaling beyond the width of their parents.

**Parameters**

1. Display : Default is block

**Example**
```sass
@include img-responsive;
```

## Triangle
Create a CSS triangle pointing up, down, left or right.

**Parameters**

1. Size : in px
2. Colour
3. Direction

**Example**
```sass
@include triangle (20px, #f00, down);
```

## px to em
A simple function which converts px to em.

**Parameters**

1. Pixel size
2. Base size : Default is 16, this probably won't change

**Example**
```sass
width: em(20px);
```