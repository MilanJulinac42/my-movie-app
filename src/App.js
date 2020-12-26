import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Welcome...</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="flex-horizontal box-shadow">
            <input
              autofocus
              type="text"
              placeholder="Search for a movie, tv show, person..."
            />
            <button>Search</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
