console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

// JS Exercises
// EX11) Write a function to add a new link into the navbar❌
const navbar = document.querySelector(
  'body > div > div.nav-scroller.py-1.mb-2 > nav'
);

const google = `<a class="p-2 text-muted" href="google.com">Google</a>`;

const addLink = (link, element) =>
  element.insertAdjacentHTML('beforeend', link);
addLink(google, navbar);

// EX12) Write a function to change the color of the main title
const changeTitleCol = (title, hexColor) => (title.style.color = `${hexColor}`);
const mainTitle = document.querySelector(
  'body > main > div > div > div:nth-child(2) > h2.blog-post-title'
);
changeTitleCol(mainTitle, '#3a4f3f');
// EX13) Write a function to change the background of the jumbotron
const jumbo = document.querySelector(
  'body > div > div.jumbotron.p-4.p-md-5.rounded'
);

const changeBgJumbo = (jumbo, imgUrl) => {
  // if (hexBgColor) {
  //   jumbo.classList.remove('bg-dark');
  //   jumbo.style.backgroundColor = `${hexBgColor}`;
  // }

  jumbo.classList.remove('bg-dark');
  jumbo.style.background = `url(${imgUrl}) no-repeat center center`;
  jumbo.style.backgroundSize = `contain`;
  jumbo.classList.remove('text-white');
};

changeBgJumbo(
  jumbo,
  'https://blog.tryshiftcdn.com/uploads/2018/11/emojis_1160x600_acf_cropped-1-1.png'
);

// EX14) Write a function to remove all the links under "Elsewhere"
const elseWhere = document.querySelector(
  'body > main > div > aside > div:nth-child(3)'
);
const removeLinks = (element) =>
  element.querySelectorAll('a').forEach((link) => link.remove());

removeLinks(elseWhere);
// EX15) Write a function to change the column size for post headings
const blogPosts = document.getElementsByClassName('blog-post');
[...blogPosts].forEach((post) => post.classList.add('d-flex', 'flex-column'));
//! rivedere

// EX16) Write a function to remove the "Search" magnifying glass icon
const magnifying = document.querySelector(
  'body > div > header > div > div.col-4.d-flex.justify-content-end.align-items-center > a.text-muted > svg'
);
magnifying.remove(); //!rivedere
// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
//! DA FARE
const trim50Chars = () => {};
// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
const blogSection = document.querySelector('body > main > div > .blog-main');
console.log(blogSection);
const newerBtn = document.querySelector(
  'body > main > div > div > nav > a.btn.btn-outline-secondary'
);
console.log(newerBtn);
newerBtn.classList.remove('disabled');
const createNewBlogPost = (e) => {
  e.preventDefault();
  const blogDiv = document.createElement('div');
  blogDiv.classList.add('blog-post', 'd-flex', 'flex-column');
  const heading = document.createElement('h2');
  heading.classList.add('blog-post-title');
  heading.innerText = `New posto title`;
  blogDiv.appendChild(heading);
  blogSection.insertBefore(
    blogDiv,
    blogSection.querySelector('.blog-pagination')
  );
};
newerBtn.addEventListener('click', createNewBlogPost);
// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
