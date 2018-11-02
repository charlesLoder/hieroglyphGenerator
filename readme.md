# Hieroglyph Generator

A web app to convert Gardiner sign codes to the equivalent Unicode Hieroglyph characters.

## Using Live

Make sure you have a font on your system that supports Unicode Egpytian Hieroglyphs. A list of fonts can be found [here](http://www.egpz.org/Page/Fonts). 

#### From Gardiner to Hieroglyphs

Type in a Gardiner sign, hit the `▼` arrow, and it will output the corresponding hieroglyph character. Gardiner signs must be written with three digits.

If you want multiple signs, you _must_ separate the codes with a slash `/` or comma `,` (e.g. A001/A017A/E004).

#### From Hieroglyphs to Gardiner

You can enter a string of _unicode_ hieroglyph character, hit the `▲` arrow, and it will produce the corresponding Gardiner codes.

Though you do note have to separate the hieroglyphs with a slash `/` or comma `,` it will perform quicker on long strings of text if they are there. 

**NOTE** you cannot use text generated from JSESH. It is not unicode.

#### Why not just use JSESH?

JSESH, while a fantastic tool, does not produce Unicode characters. Every unicode character is semantically distinct from another. 

According to _Manuel de Codage_, you can encode the text—`𓆭𓇍𓅓𓊵`— as `M1 M18 G17 R4` or as `i ii m Htp`. The text produced by JSESH (and other _MdC_ editors) is not readable by a computer. The text has to be stored as `M1 M18 G17 R4` or as `i ii m Htp`, which is not semantically Egyptian (i.e. the letter `i` to a computer means the Latin character `i`, only later is it interpreted as an Egyptian symbol). When a text is stored as `𓆭`, the computer knows that is a semantically distinct Egyptian symbol.

This tool does not interpret text, it _converts_ it to Egyptian characters.

#### I want to produce characters stacked on each other

Once Unicode v.12 is released, you will be able to create ligatures and quadrants.

## Setup

- make sure [node.js](http://nodejs.org) and [roots](http://roots.cx) are installed
- clone this repo down and `cd` into the folder
- run `npm install`
- run `roots watch`
- ???
- get money

## Deploying

- If you just want to compile the production build, run `roots compile -e production` and it will build to public.
- To deploy your site with a single command, run `roots deploy -to XXX` with `XXX` being whichever [ship](https://github.com/carrot/ship#usage) deployer you want to use.