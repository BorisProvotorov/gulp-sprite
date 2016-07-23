Gulp sprite 
================

A simple Gulp task that combines several images into a sprite file, and generates CSS rules to easily include those images in a webpage.


## How to use in your Gulp workflow

1. Copy and paste the sprite task from this repo's gulpfile to yours.
2. Create a new source_img folder and place all your images inside it. Take a minute to carefully name all the images as their name will be used in the generated CSS file.
3. Run `$ npm install`
4. Run `$ gulp sprite`
5. In your HTML file, link to the generated sprite.css
```<link rel="stylesheet" href="sprite.css">```
6. Use the generated classes to include images in your page, for example:
```<div class="sprite sprite-box"></div>```

