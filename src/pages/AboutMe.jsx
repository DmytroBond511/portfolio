import React from 'react';

function AboutMe() {
  return (
    <section>
      <h1>Про мене</h1>
      <p>Я — початківець-розробник, що захоплюється вебтехнологіями та прагне розвиватися у сфері програмування.</p>
      <h2>Мої проєкти</h2>
      <h3>HTML + CSS</h3>
      <ul>
        <li><a href="https://github.com/yourname/html-css-project1">Проєкт 1</a></li>
        <li><a href="https://github.com/yourname/html-css-project2">Проєкт 2</a></li>
      </ul>
      <h3>JavaScript</h3>
      <ul>
        <li><a href="https://github.com/yourname/js-project1">JS Проєкт 1</a></li>
        <li><a href="https://github.com/yourname/js-project2">JS Проєкт 2</a></li>
      </ul>
      <h3>React</h3>
      <ul>
        <li><a href="https://github.com/yourname/react-project1">React Проєкт 1</a></li>
        <li><a href="https://github.com/yourname/react-project2">React Проєкт 2</a></li>
      </ul>
    </section>
  );
}

export default AboutMe;