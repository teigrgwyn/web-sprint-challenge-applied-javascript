import axios from 'axios';

const Tabs = (topics) => {
  const div = document.createElement('div');
  
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
  // CSS displays elements vertically instead of horizontally - leaving it like so
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }
