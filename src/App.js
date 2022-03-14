import './App.css';

function Subject(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            {props.sub}
        </header>
    );
}

function TOC() {
    return (
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
            </ul>
        </nav>
    );
}

function Content() {
    return (
        <article>
            <h2>HTML</h2>
            HTML is awesome!!!!!!
        </article>
    );
}

function App() {
  return (
    <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content></Content>
    </div>
  );
}

export default App;
