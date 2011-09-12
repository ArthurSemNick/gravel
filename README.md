# Gravel

This is a proof of concept for a simple (and pretty fast) JavaScript search-as-you-type. You should [check out the demo](http://richardhenry.github.com/gravel/example.html) before doing anything else.

Eventually, this project will become an [Ender](http://ender.no.de/) package.

### How it Works, and How to Use It

For a concise example, take a look at [the source of example.html](https://github.com/richardhenry/gravel/blob/master/example.html). If you're looking for a more in-depth explanation, read on.

This is the HTML list that we would like to filter:

    <ol id="names">
        <li>Lovett Daria</li>
        <li>Rebecca Sherwood</li>
        <li>Maryann Terrie</li>
        <li>Ephraim Samara</li>
        <li>Forrest Florence</li>
    </ol>

Now, this list doesn't have any keywords to search against yet. To tagify these elements, we need to do this:

    gravel.tagify($("ol#names li"));

Our HTML now effectively looks like this, and is ready to be filtered:

    <ol id="names">
        <li data-keywords="lovett,daria">Lovett Daria</li>
        <li data-keywords="rebecca,sherwood">Rebecca Sherwood</li>
        <li data-keywords="maryann,terrie">Maryann Terrie</li>
        <li data-keywords="ephraim,samara">Ephraim Samara</li>
        <li data-keywords="forrest,florence">Forrest Florence</li>
    </ol>

Note that you can improve the performance of your page by adding the `data-keywords` attribute to those elements on the server-side, skipping the tagify method altogether. You could also add other keywords you want to be able to search against, such as information that cannot be extracted from the element itself!

If you filtered this list against "s" by doing:

    gravel.filter($("ol#names li"), "s");

The HTML will be transformed into something like this (elements that did not match now have `style="display:none;"`):

    <ol id="names">
        <li data-keywords="lovett,daria" style="display:none;">Lovett Daria</li>
        <li data-keywords="rebecca,sherwood">Rebecca Sherwood</li>
        <li data-keywords="maryann,terrie" style="display:none;">Maryann Terrie</li>
        <li data-keywords="ephraim,samara">Ephraim Samara</li>
        <li data-keywords="forrest,florence" style="display:none;">Forrest Florence</li>
    </ol>

Keywords and queries will automatically be lowercased; you can customize this behavior by passing in your own keywordFunc and queryFunc functions. Take a look at the source code for gravel.js to see how to do that.

You can also customize the behavior for a match or non-match; the default is to show or hide the element, but you can easily add/remove a class or change the text instead.

Good luck! If you need help, ask [@richardhenry on Twitter](http://twitter.com/richardhenry).

### Performance

I was able to filter the 100 item list in example.html against a 1 char search term at ~376 times/sec, and against two search terms (4 chars and 5 chars) at ~316 times/sec, using Safari 5.1 on Mac OS X 10.7.1 (2.7 GHz Intel Core i7).

Here's the jsPerf page for you to try it out yourself: http://jsperf.com/gravel (Click the "run tests" button.)

### Browser Support

This project needs some actual tests so that I can better ensure browser coverage, but it seems to work in recent versions of Safari, Chrome, Firefox, and Internet Explorer.

I would like to ensure support for all major modern browsers, and Internet Explorer 6 and up.

### Dependencies

This repository includes ender.min.js, which is a minified copy of the `ender-js` and `jeesh` packages. If you want to rebuild that file, or add other Ender dependencies, you will need to [install Ender](http://ender.no.de/) and run `ender build jeesh` in this directory.

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