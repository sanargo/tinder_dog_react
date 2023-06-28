import Header from "./components/Header";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

import data from "./data.js";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [index, setIndex] = useState(0);

  const dog = data[index];

  const dislikeBtn = () => {
    dog.hasBeenSwiped = true;
    if (counter <= data.length) {
      setCounter((prevState) => prevState + 1);
    }
    if (index < data.length - 1) {
      setTimeout(() => {
        setIndex((prevState) => prevState + 1);
      }, 1000);
    }
  };

  const likeBtn = () => {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    if (counter <= data.length) {
      setCounter((prevState) => prevState + 1);
    }
    if (index < data.length - 1) {
      setTimeout(() => {
        setIndex((prevState) => prevState + 1);
      }, 1000);
    }
  };

  console.log(counter);

  return (
    <div className="bg-gray-200 h-screen pt-20 font-poppins md:pt-32">
      <div className="bg-white w-80 mx-auto  md:w-96">
        <Header />
        <Card dog={dog} />
        <Buttons dislike={dislikeBtn} like={likeBtn} />
      </div>
    </div>
  );
}

export default App;
