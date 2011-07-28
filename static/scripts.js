$(function() {
    $('code').html(function(i, old) {
        return old.replace('SERVICE_URL', '\'' + location.href + 'openurl\'')
    });

    $.post('http://closure-compiler.appspot.com/compile',
        { js_code: $('code').html(),
          compilation_level: 'WHITESPACE_ONLY',
          output_format: 'text',
          output_info: 'compiled_code' },
        function(data) {
            $('#bookmarklet').attr('href', 'javascript:' + data);
    });

    $('#bookmarklet_label').keyup(function() {
        updateBookmarkletLabel();
    });

    updateBookmarkletLabel();            
    
    prettyPrint();
});

function updateBookmarkletLabel() {
    $('#bookmarklet').html($('#bookmarklet_label').val());
}