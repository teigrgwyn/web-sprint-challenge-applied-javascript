import axios from 'axios';

const Tabs = (topics) => {
  const div = document.createElement('div');
  div.classList.add("topics");
  
  // assemble sub-divs
  topics.forEach(item => {
    const element = document.createElement('div');
    element.classList.add("tab");
    element.textContent = item;
    div.appendChild(element);
  });

  return div;
}

const tabsAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }
