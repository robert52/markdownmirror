(function() {
  'use strict';

  var delay;
  var preview = document.getElementById('mm-entry-preview');

  function update() {
    var val = editor.getValue();

    preview.innerHTML = marked(val);
  }

  marked.setOptions({
    gfm: true,
    pedantic: false,
    sanitize: false
  });

  var editor = CodeMirror.fromTextArea(document.getElementById('mm-editor-area'), {
    mode: 'gfm',
    lineNumbers: false,
    theme: 'default',
    extraKeys: {
      'Enter': 'newlineAndIndentContinueMarkdownList'
    }
  });

  editor.on('change', function() {
    clearTimeout(delay);
    delay = setTimeout(update, 300);
  });

  console.log(editor);

})();