import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
useState

function Header(props) {
  console.log(props);
  return <header>
    <h1><a href="" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>
}


function App() {
  const mode = 'WELCOME';
  const topics = [
    { id: "1", title: "html", body: "html is ..." },
    { id: "2", title: "css", body: "css is ..." },
    { id: "3", title: "javascript", body: "js is ..." }
  ]
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" />
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello, Read" />
  }
  return (
    <div >
      <Header title="WEB" onChangeMode={() => {
        mode = 'WELCOME'
      }}
      />
      <Nav topics={topics} onChangeMode={(id) => {
        mode = 'READ'
      }} />
      {content}

    </div >
  );
}

export default App;
