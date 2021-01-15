// import axios from 'axios';

const Card = (article) => {
//   // TASK 5
//   // ---------------------
//   // Implement this function, which should return the markup you see below.
//   // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
//   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
//   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
//   // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//   //
//   // <div class="card">
//   //   <div class="headline">{ headline }</div>
//   //   <div class="author">
//   //     <div class="img-container">
//   //       <img src={ authorPhoto }>
//   //     </div>
//   //     <span>By { authorName }</span>
//   //   </div>
//   // </div>
//   //
//   const div = document.createElement('div');
//   div.classList.add("card");
//   // assemble each card given
//   article.forEach(item => {
//     // top-level div
//     const div = document.createElement('div');
//     div.classList.add("card");
//     // headline
//     const div2 = document.createElement('div');
//     div2.classList.add("headline");
//     div2.textContent = article.headline;
//     // author
//     const div3 = document.createElement('div');
//     div3.classList.add("author");
//     div3.textContent = article.author;
//     // authorPhoto
//     const div4 = document.createElement('div');
//     div4.classList.add("img-container");
//     const img = document.createElement('img').setAttribute('src', article.authorPhoto);
//     // authorName
//     const span = document.createElement('span');
//     span.textContent = article.authorName;

//     // assemble hierarchy
//     div.appendChild(div2);
//     div.appendChild(div3);
//     div3.appendChild(div4);
//     div4.appendChild(img);
//     div3.appendChild(span);
//   });

//   return div;
}

const cardAppender = (selector) => {
//   // TASK 6
//   // ---------------------
//   // Implement this function that takes a css selector as its only argument.
//   // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
//   // However, the articles do not come organized in a single, neat array. Inspect the response closely!
//   // Create a card from each and every article object in the response, using the Card component.
//   // Append each card to the element in the DOM that matches the selector passed to the function.
//   //
//   axios.get('https://lambda-times-api.herokuapp.com/articles')
//     .then(res => {
//       Array.from(res.data).forEach(item => {
//         document.querySelector(selector).appendChild(Card(item));
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     })
}

export { Card, cardAppender }
