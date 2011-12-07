$(function() {
    // Set initial link text
    setBookmarkletLinkText();

    // Minify bookmarklet source
    $.post('http://closure-compiler.appspot.com/compile',
        { js_code: $('#source').html(),
          compilation_level: 'WHITESPACE_ONLY',
          output_format: 'text',
          output_info: 'compiled_code' },
        function(data) {
            var bookmarklet_href = 'javascript:' + data;
            $('#bookmarklet').attr('href', bookmarklet_href);
            $('#minified').html(bookmarklet_href);
    });

    // Update bookmarklet text when edited by user
    $('#bookmarklet_label').keyup(function() {
        setBookmarkletLinkText();
    });
    
    // Add syntax highlighting (depends on prettify.js)
    prettyPrint();
});

function setBookmarkletLinkText() {
    $('#bookmarklet').html($('#bookmarklet_label').val());
}