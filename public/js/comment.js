const newCommentHandler = async (event) => {
    event.preventDefault();
    var pathname = window.location.pathname;
    var parts = pathname.split('/');
    var lastSegment = parts.pop() || parts.pop(); 


    const comment = document.querySelector('#comment').value.trim();
    const post_id = lastSegment;
    if (comment && post_id) {
        const response = await fetch('/api/posts/comments', {
            method: 'POST',
            body: JSON.stringify({comment, post_id}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create comment.');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);