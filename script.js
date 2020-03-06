
UIkit.notification(options);
UIkit.notification(message, status);

UIkit.notification({
    message: 'my-message!',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});

// Shortcuts
UIkit.notification('My message');
UIkit.notification('My message', status);
UIkit.notification('My message', { /* options */ });


// timer for homepage
function startTimer(){
    var tt = setInterval(function() {
        window.open ('about-me.html','_self',false)
    },5000);
    }
