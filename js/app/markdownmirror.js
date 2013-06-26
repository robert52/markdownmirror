var MarkdownMirror = (function() {
  'use strict';

  var delay;

  /**
   * A small utility function to create DOM nodes
   *
   * @param {String} tag - html tag name
   * @param {String|DOMnode} cotent - what you want in the element
   * @param {String} className - name of the class to add
   * @param {String} style - a style string
   * @return {DOMnode} element - the created dom node
   */
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

  /**
   * Creates the initial editor structure
   *
   */
  function __createEditorStructure() {
      var frag = document.createDocumentFragment();
      this.markdown = _createNode('div', null, 'mm-entry-markdown');
      this.preview = _createNode('div', null, 'mm-entry-preview');
      this.textarea = _createNode('textarea');
      this.textarea.id = 'mm-editor-area';

      this.markdown.appendChild(this.textarea);
      frag.appendChild(this.markdown);
      frag.appendChild(this.preview);

      this.element.appendChild(frag);
  }

  return {
    /**
     * Update preview method
     *
     * updates the preview with the rendered html from the markdown
     */
    updateView: function() {
      var val = this.editor.getValue();

      this.preview.innerHTML = marked(val);
    },
    /**
     * Initializing method
     *
     * where all the magic happens :)
     */
    init: function(options) {
      console.log(this);
      var me = this;
      this.options = options;

      this.updateDelay = options.updateDelay || 300;
      this.element = document.getElementById(options.element);

      //call with different scopre the create editor structure function
      __createEditorStructure.call(this);

      //setup marked
      marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false
      });

      //create the codemirror editor
      this.editor = CodeMirror.fromTextArea(this.textarea, {
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
    }
  };

})();