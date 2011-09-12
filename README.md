# Gravel

This is a proof of concept for a simple (and pretty fast) JavaScript search-as-you-type. You should [check out the demo](http://richardhenry.github.com/gravel/example.html) before doing anything else.

Eventually, this project will become an [Ender](http://ender.no.de/) package.

### Performance

I was able to filter the list in `example.html` against a 1 character search term ~250 times/sec, and against two 8 character search terms at ~245 times/sec, using Safari 5.1 on Mac OS X 10.7.1 (2.7 GHz Intel Core i7).

### Browser Support

This project needs some actual tests so that I can better ensure browser coverage, but it seems to work in recent versions of Safari, Chrome, Firefox, and Internet Explorer.

I would like to ensure support for all major modern browsers, and Internet Explorer 6 and up.

### Dependencies

This repository includes `ender.min.js`, which is a minified copy of the `ender-js` and `jeesh` packages. If you want to rebuild that file, or add other Ender dependencies, you will need to [install Ender](http://ender.no.de/) and run `ender build jeesh` in this directory.

### License

Copyright (c) 2011 Richard Henry

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.