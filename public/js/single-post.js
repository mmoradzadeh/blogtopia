document.querySelector('#back-button').addEventListener('click', function() {
    var url = this.getAttribute('data-url'); 
    window.location.href = url;
});

document.querySelector('#delete-button').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    window.location.href = url;
});

document.querySelector('#edit-button').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    window.location.href = url;
});

document.querySelector('#add-comment-button').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    window.location.href = url;
});