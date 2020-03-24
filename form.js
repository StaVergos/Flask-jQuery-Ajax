$(document).read(function()) {

    $('form').on('submit', function(event)) {

        $.ajax({
            data: {
                name: $('#nameInput').val(),
                email: $('#emailInput').val()
            },
            type: 'POST'
            url: '/process'
        })
        .done(function(data))
        
        event.preventDefault();
    }
}