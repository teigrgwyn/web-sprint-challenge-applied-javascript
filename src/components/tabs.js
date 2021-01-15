const Tabs = (topics) => {
  const div = document.createElement('div');

  topics.forEach(item => {
    const element = document.createElement('div');
    element.classList.add("tab");
    element.textContent = item;
    div.appendChild(element);
  });
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
