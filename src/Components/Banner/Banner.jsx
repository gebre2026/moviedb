// import React,{useEffect, useState} from "react";
// import NetflixBannerLogo from "../../assets/image/logo.png";
// import { Play, Info } from "lucide-react";
// import styles from "./Banner.module.css";
// import {movieInstance} from '../../Utility/MovieInstance'
// import requests from "../../Utility/requestUrls";

// const BANNER_BASE = "https://image.tmdb.org/t/p/original/"

// function Banner(){

// const [bannerImage, setBannerImage]= useState({})

// useEffect (()=>{
// async function fetchBannerImage(){
// const request= await movieInstance.get(requests.fetchNetflixOriginals)
// setBannerImage (
// request.data.results[Math.floor(Math.random()*request.data.results.length)]
// )
// }
// fetchBannerImage()
// }, [])

// function truncate(str, n) {
//   return str?.length >n ? str.substr(0, n - 1) + "..." : str;
// }

//   return (
//     <div
//       className={Styles.Banner}
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
//       }}
//     >
//       <div className={styles.contents}>
//         {/* netflix image */}
//         <img
//           className={styles.logoImg}
//           src={NetflixBannerLogo}
//           alt="Netflix logo"
//         />

//         {/* title  */}
//         <h1 className={styles.title}>{bannerImage?.original_name}</h1>
//         {/* description */}
//         <h1 className={styles.description}>
//           {truncate(bannerImage?.overview, 120)}
//         </h1>
//         {/* buttons */}
//         <div className={styles.buttonContainer}>
//           <button className={styles.button}>
//             <Play size={30} />
//             Play
//           </button>

//           <button className={styles.button}>
//             <Info size={30} />
//             My List
//           </button>
//         </div>
//       </div>
//       {/* fading */}
//       <div className={styles.fadeBottom}></div>
//     </div>
//   );
// }

// export default Banner;

import React, { useEffect, useState } from "react";

import NetflixBannerLogo from "../../assets/image/logo.png";

import { Play, Info } from "lucide-react";

import styles from "./Banner.module.css";

import requests from "../../Utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const request = await movieInstance.get(requests.fetchNetflixOriginals);

        setBannerImage(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.log("Error fetching banner image:", error);
      }
    }

    fetchBannerImage();
  }, []);

  // truncate text
  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* Netflix Logo */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix Logo"
        />

        {/* Title */}
        <h1 className={styles.title}>{bannerImage?.original_name}</h1>

        {/* Description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>

          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* Fade Bottom */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
