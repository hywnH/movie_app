function Dog({fav}){
  return <h3>I love {fav}</h3>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Dog fav = "Gamja" />
    </div>
  );
}

export default App;
