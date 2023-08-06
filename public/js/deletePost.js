const deletePost = async (event) => {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];


    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace(`/dashboard/posts`);
    } else {
        alert('Failed to delete the post.');
    }
}

document
    .querySelector('.delete-post-form')
    .addEventListener('submit', deletePost);