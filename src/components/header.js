const Header = (title, date, temp) => {
  // create elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');

  // assign properties
  header.classList.add("header");
  date.classList.add("date");
  date.textContent = date;
  title.textContent = title;
  temp.classList.add("temp");
  temp.textContent = temp;

  // assemble hierarchy
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
