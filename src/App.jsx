import "./App.css";
import Navbar from "./components/Navbar";
import Feed from './components/Feed'


function App() {
  return (
    <div className=" bg-gray-100">
    <div className=" mx-[auto] md">
      <Navbar />

      <div className="w-[95%] md:w-[98%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] mx-[auto] pt-[10px]">
        <Feed />
      </div>
      
    </div>
    </div>
  );
}

export default App;