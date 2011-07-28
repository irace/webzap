$(function() {
    // Update bookmarklet source with current location URL
    $('code').html(function(i, old) {
        return old.replace('@SERVICE_URL@', location.href)
    });

    // Minify bookmarklet source
    $.post('http://closure-compiler.appspot.com/compile',
        { js_code: $('code').html(),
          compilation_level: 'WHITESPACE_ONLY',
          output_format: 'text',
          output_info: 'compiled_code' },
        function(data) {
            // Update bookmarklet link HREF
            $('#bookmarklet').attr('href', 'javascript:' + data);
    });

    // Initial setting of bookmark label value
    updateBookmarkletLabel();            

    // Update bookmarklet label value when edited by user
    $('#bookmarklet_label').keyup(function() {
        updateBookmarkletLabel();
    });
    
    // Add syntax highlighting (depends on prettify.js)
    prettyPrint();
});

function updateBookmarkletLabel() {
    $('#bookmarklet').html($('#bookmarklet_label').val());
}