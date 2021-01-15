import axios from 'axios';

const Card = (article) => {
  // top-level div
  const div = document.createElement('div');
  div.classList.add("card");
  // headline
  const div2 = document.createElement('div');
  div2.classList.add("headline");
  div2.textContent = article.headline;
  // author
  const div3 = document.createElement('div');
  div3.classList.add("author");
  div3.textContent = article.author;
  // authorPhoto
  const div4 = document.createElement('div');
  div4.classList.add("img-container");
  const img = document.createElement('img');
  img.setAttribute('src', article.authorPhoto);
  // authorName
  const span = document.createElement('span');
  span.textContent = article.authorName;

  // assemble hierarchy
  div.appendChild(div2);
  div.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(img);
  div3.appendChild(span);

  return div;
}

const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
     .then(response => {
      for (const key in response.data.articles) {
        for (let i = 0; i < response.data.articles[key].length; i++) {
          document.querySelector(selector).appendChild(Card(response.data.articles[key][i]));
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export { Card, cardAppender }
