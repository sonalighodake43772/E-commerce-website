import "./App.css";
import Navbar from "./component/Navbar";
import Items from "./component/Items";

function App() {
  return (
    <div >
      <Navbar />
      <h1 class="text-center p-5  bg-secondary text-white">The Generics</h1>
      <Items/>
    </div>
  );
}

export default App;