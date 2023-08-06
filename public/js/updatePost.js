const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (title && content) {
        console.log(title, content, id);
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace(`/dashboard/posts/${id}`);
        } else {
            alert('Failed to update post.');
        }
    }
};

document
    .querySelector('.update-post-form')
    .addEventListener('submit', updatePost);
