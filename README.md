#MarkdownMirror

MarkdownMirror is a JavaScript component that creates a markdown editor and outputs the markdown into a preview. MarkdownMirror uses [CodeMirror](http://codemirror.net "CodeMirror editor") as code editor and [marked](https://github.com/chjj/marked "markdown parser") as the markdown parser.

##Getting started

- Download the source code or clone the repo on GitHub.
- Drop it into your project

###Usage:

```javascript

  var editor = MarkdownMirror.init({
    element: 'editor-wrapper' //editor holder id
  });
```


##Configuration
Coming soon...

##Credits

This project uses the following open source components:

- [CodeMirror](http://codemirror.net "CodeMirror editor") - In-browser Code editor
- [marked](https://github.com/chjj/marked "markdown parser") - A markdown parser written in JavaScript

##License

(The MIT License)

Copyright (c) 2013, Robert Onodi (https://github.com/robert52/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.