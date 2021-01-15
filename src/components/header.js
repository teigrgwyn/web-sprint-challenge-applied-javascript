const Header = (title, date, temp) => {
  // create elements
  const div = document.createElement('div');
  const span = document.createElement('span');
  const h1 = document.createElement('h1');
  const span2 = document.createElement('span');

  // assign properties
  div.classList.add("header");
  span.classList.add("date");
  span.textContent = date;
  h1.textContent = title;
  span2.classList.add("temp");
  span2.textContent = temp;

  // assemble hierarchy
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
}

const headerAppender = (selector) => {
  const newHeader = Header("Lambda Times", "Jan 6ᵗʰ, 2021", "26°");
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }
