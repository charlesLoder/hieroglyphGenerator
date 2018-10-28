# Hieroglyph Generator

A web app to convert Gardiner sign codes to the equivalent hieroglyph in unicode

### Setup

- make sure [node.js](http://nodejs.org) and [roots](http://roots.cx) are installed
- clone this repo down and `cd` into the folder
- run `npm install`
- run `roots watch`
- ???
- get money

### Deploying

- If you just want to compile the production build, run `roots compile -e production` and it will build to public.
- To deploy your site with a single command, run `roots deploy -to XXX` with `XXX` being whichever [ship](https://github.com/carrot/ship#usage) deployer you want to use.

### Using

Make sure you have a font on your system that supports Unicode Egpytian Hieroglyph. A list of fonts can be found [here](http://www.egpz.org/Page/Fonts).

Type in a Gardiner sign, and it will output the corresponding hieroglyph character.

Optionally, you can enter a string of unicode hieroglyphs and it will output the Gardiner signs.

**NOTE** you cannot use text generated from JSESH. It is not unicode.

Once Unicode v.12 is released, you will be able to create ligatures and quadrants.
