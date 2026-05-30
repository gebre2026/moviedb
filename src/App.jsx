// import Header from "./Components/Header/Header";
// import Banner from "./Components/Banner/Banner";
// import DisplayRow from "./Components/DisplayRow/DisplayRow";
// import Footer from "./Components/Footer/Footer";

// import movie1 from "./assets/image/movie1.jpg";
// import movie2 from "./assets/image/movie2.jpg";
// import movie3 from "./assets/image/movie3.jpg";
// import movie4 from "./assets/image/movie4.jpg";
// import movie5 from "./assets/image/movie5.jpg";

// function App() {
//   const movies = [movie1, movie2, movie3, movie4, movie5];

//   return (
//     <>
//       <Header />

//       <Banner />

//       <DisplayRow title="Trending Now" movies={movies} />

//       <DisplayRow title="Popular on Netflix" movies={movies} />

//       <Footer />
//     </>
//   );
// }

// export default App;
// ---------------the below is working

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";

// import "./App.css";
// import Header from "./Components/Header/Header";
// import Banner from "./Components/Banner/Banner";
// import DisplayRow from "./Components/DisplayRow/DisplayRow";

// import Footer from "./Components/Footer/Footer";

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       <Banner />
//       <DisplayRow />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import netflix from "/logo.png";
import "./App.css";

import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import DisplayRow from "./Components/DisplayRow/DisplayRow";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
      <Footer/>
  
    </>
  );
}

export default App;