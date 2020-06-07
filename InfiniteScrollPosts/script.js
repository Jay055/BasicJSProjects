// Create DOM elements 

const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

// Set limit posts per page, start from 1st page
let limit = 5;
let page = 1;
// Fetch posts from API typicode
async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await res.json();
    return data;
}
// Show posts in DOM
async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
        postsContainer.appendChild(postEl);
    });
}


// Show loader & fetch more posts
function showLoading() {
    loading.classList.add('show');

    // Remove the bouncing bubbles are some time
    setTimeout(() => {
        loading.classList.remove('show');
    // Increase the page in 300ms by calling showPosts()    
        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}



// Filter posts by input
function filterPosts(e) {

  // Get the value in the text box, ignore case sensitivity
    const term = e.target.value.toUpperCase();
  //Get all posts (in the DOM currenlty)  
    const posts = document.querySelectorAll('.post');
  // Get the innner text of post title and body.  
    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
   // Search for the term >-1 means it matches     
        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {

   // if it matches display        
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}
// Show initial posts
showPosts();
window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});
filter.addEventListener('input', filterPosts);



// Why does it show only the result for the filtered posts. 