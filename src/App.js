import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./App.css";

function App() {
  const imageUrls = [
    "https://www.siiora.org/wp-content/uploads/2023/08/Austin-Moore-Hip-Prosthesis-Excel-Standard-Narrow-Stem-new.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKtexTVejZFWspCkzUjcsg0PhGgszVgzLTw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5JOkwwQhS79ncQc1EdgY7kfqNklD4A2F2BqGCEQ6h5hJ3diKP49FWDR-HfNtNLpmRc4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOTeTudzWm0zVSEKqTvT67aNDeN5MG7yTyw&usqp=CAU",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1
    );
  };
  const [src, setSrc] = useState(
    "https://atlas-content-cdn.pixelsquid.com/stock-images/c-arm-x-ray-machine-3AAmNe0-600.jpg"
  );

  return (
    <div className="App  h-full w-full">
      <div className="bg-sky-500 h-12 mb-4 flex  ">
        <h1 className="p-2 m-2 text-xl text-white font-bold">
          Medical Equipment
        </h1>
      </div>

      <div className="bg-sky-400 p-6 m-5 mt-28 h-[590px]  rounded-lg flex space-x-10 items-center justify-center">
        <div className="flex-col">
          <div className="flex flex-col mt-6 font-bold text-lg  border-black border-2 p-2 h-fit">
            <h1>Model No: AMS46</h1>
            <span>Description :</span>
            <span>Austin Moore Hip Prostheses Sterile/Non Sterile</span>
            <span>Indications: </span>
            <span>
              ▶️ Old and frail patients as the prosthesis loosen with time &
              erode the acetabulum
            </span>
            <span>▶️ Intracapsular femoral neck fractures </span>
            <span>▶️ Osteonecrosis of femoral head </span>
            <span>▶️Fractures secondary to malignancy</span>
          </div>

          <div className="flex space-x-3 m-3 border-black border-2 p-2 w-fit">
            <img
              onClick={() => {
                setSrc(
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfFpAwWoDuWi11K0Yr3651zZAGzsENBu56tUgvOi4h3HsDpQoBlrEJRZNtXIuz-E8CEk"
                );
              }}
              className="h-32 w-32"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfFpAwWoDuWi11K0Yr3651zZAGzsENBu56tUgvOi4h3HsDpQoBlrEJRZNtXIuz-E8CEk"
              alt=""
            />
            <img
              onClick={() => {
                setSrc(
                  "https://www.perlove.net/wp-content/uploads/perlove-mobile-c-arm-machinr.png"
                );
              }}
              className="h-32 w-32"
              src="https://www.perlove.net/wp-content/uploads/perlove-mobile-c-arm-machinr.png"
              alt=""
            />
            <img
              onClick={() => {
                setSrc(
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACc1JWZYwgz4yLq2Oru5IDOtzwfb78AiJj7naS42vK8N4mGtiGrlKZ0VzF5hEebCRNn8"
                );
              }}
              className="h-32 w-32"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACc1JWZYwgz4yLq2Oru5IDOtzwfb78AiJj7naS42vK8N4mGtiGrlKZ0VzF5hEebCRNn8"
              alt=""
            />
            <img
              onClick={() => {
                setSrc(
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa3OUJQWsj7Ln7fPg02c9UA2TLOF9OT0X0w"
                );
              }}
              className="h-32 w-32"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa3OUJQWsj7Ln7fPg02c9UA2TLOF9OT0X0w"
              alt=""
            />
          </div>
        </div>

        <img
          className="m-4 rounded-2xl w-[590px] h-[490px] h- hover:scale-105 hover:border-black border-2"
          src={src}
          alt=""
        />
      </div>
      <div className="carousel-container mb-11 p-2 flex items-center justify-center">
        <button
          className="carousel-button px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={goToPreviousSlide}
        >
          Previous
        </button>
        <img
          className="carousel-image mx-4 w-80 h-56 rounded-lg shadow-lg"
          src={imageUrls[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
        <button
          className="carousel-button px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
