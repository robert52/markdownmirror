var MarkdownMirror = (function() {
  'use strict';

  var delay;

  function _createNode(tag, content, className, style) {
    var elm = document.createElement(tag);
    if (className) {
      elm.className = className;
    }

    if (style) {
      elm.style.cssText = style;
    }

    //check if it's text
    if (typeof (content) === 'string') {
      elm.innerHTML = content;
    }

    //check if it's a DOM node
    if (content && content.nodeName) {
      elm.appendChild(content);
    }

    return elm;
  }

  return {
    updateView: function() {
      var val = this.editor.getValue();

      this.preview.innerHTML = marked(val);
    },
    init: function(options) {
      console.log(this);
      var me = this;
      this.options = options;

      this.updateDelay = options.updateDelay || 300;
      this.element = document.getElementById(options.element);

      var frag = document.createDocumentFragment();
      var markdown = _createNode('div', null, 'mm-entry-markdown');
      var preview = _createNode('div', null, 'mm-entry-preview');
      var textarea = _createNode('textarea');
      textarea.id = 'mm-editor-area';

      markdown.appendChild(textarea);
      frag.appendChild(markdown);
      frag.appendChild(preview);
      this.element.appendChild(frag);

      //setup marked
      marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false
      });

      //create the codemirror editor
      this.editor = CodeMirror.fromTextArea(textarea, {
        mode: 'gfm',
        lineNumbers: options.lineNumber || false,
        theme: 'default',
        extraKeys: {
          'Enter': 'newlineAndIndentContinueMarkdownList'
        }
      });

      //bind change event to the editor
      this.editor.on('change', function() {
        clearTimeout(delay);
        delay = setTimeout(function() {
          me.updateView()
        }, me.updateDelay);
      });

      this.markdown = markdown;
      this.preview = preview;
    }
  };

})();