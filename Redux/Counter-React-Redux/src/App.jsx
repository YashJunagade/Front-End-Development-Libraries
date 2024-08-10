import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center container">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Controls></Controls>
        </div>
      </div>
    </>
  );
}

export default App;
