import logo from './logo.svg';
import './App.css';


function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1><a href="">{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<a href=""><li>{t.title}</li></a>)
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
  const topics = [
    { id: "1", title: "html", body: "html is ..." },
    { id: "2", title: "css", body: "css is ..." },
    { id: "3", title: "javascript", body: "js is ..." }
  ]
  return (
    <div >
      <Header title="WEB" />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, WEB" />

    </div >
  );
}

export default App;
