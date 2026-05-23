// final is the below code
// import React from "react";
// import styles from "./MovieCard.module.css";

// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// function MovieCard({ movie }) {
//   let genres = ["Adventure", "Action", "Thriller"];

//   return (
//     <div className={styles.cardwrapper}>
//       {/* poster image */}
//       <img
//         className={styles.poster}
//         src={`${IMAGE_BASE}${movie?.poster_path}`}
//         alt="Poster image"
//       />

//       {/* hover card */}
//       <div className={styles.HoverCard}>
//         {/* hover image */}
//         <img
//           className={styles.HoverImage}
//           src={`${IMAGE_BASE}${movie?.poster_path}`}
//           alt="hover image"
//         />

//         {/* badge */}
//         <div className={styles.Badge}>Recently added</div>

//         {/* button row */}
//         <div className={styles.ButtonRow}>
//           <FaCirclePlay
//             className={styles.CircleButton}
//             color="white"
//             size={40}
//           />

//           <BsPlusCircle
//             className={styles.CircleButton}
//             color="white"
//             size={40}
//           />

//           <GoCheckCircleFill
//             className={styles.CircleButton}
//             color="white"
//             size={40}
//           />

//           <IoIosArrowDropdownCircle
//             className={`${styles.CircleButton} ${styles.CircleButtonSmall}`}
//             color="white"
//             size={40}
//           />
//         </div>

//         {/* metadata row */}
//         <div className={styles.MetadataRow}>
//           <span className={styles.MetadataItem}>U/A 16+</span>
//           <span className={styles.MetadataItem}>Movie</span>
//           <span className={styles.MetadataItem}>HD</span>
//         </div>

//         {/* genres */}
//         <div className={styles.genres}>
//           {genres?.map((g, index) => {
//             return (
//               <span key={index}>
//                 {g}
//                 {index < genres.length - 1 && (
//                   <span className={styles.dot}> • </span>
//                 )}
//               </span>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

// the above is final code ----------------------

// import React from "react";
// import styles from "./MovieCard.module.css";

// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// function MovieCard({ movie }) {
//   const genres = ["Adventure", "Action", "Thriller"];

//   return (
//     <div className={styles.cardwrapper}>

//       {/* Poster */}
//       <img
//         className={styles.poster}
//         src={`${IMAGE_BASE}${movie?.poster_path}`}
//         alt="Poster"
//       />

//       {/* Hover Card */}
//       <div className={styles.hoverCard}>

//         {/* Hover Image */}
//         <img
//           className={styles.hoverImage}
//           src={`${IMAGE_BASE}${movie?.backdrop_path || movie?.poster_path}`}
//           alt="Hover"
//         />

//         {/* Badge */}
//         <div className={styles.badge}>
//           Recently Added
//         </div>

//         {/* Buttons */}
//         <div className={styles.buttonsRow}>

//           <div className={styles.circleButton}>
//             <FaCirclePlay size={20} />
//           </div>

//           <div className={styles.circleButton}>
//             <BsPlusCircle size={20} />
//           </div>

//           <div className={styles.circleButton}>
//             <GoCheckCircleFill size={20} />
//           </div>

//           <div className={styles.circleButtonSmall}>
//             <IoIosArrowDropdownCircle size={20} />
//           </div>

//         </div>

//         {/* Meta Row */}
//         <div className={styles.metaRow}>
//           <span className={styles.tag}>U/A 16+</span>

//           <span className={styles.dot}>•</span>

//           <span className={styles.tag}>Movie</span>

//           <span className={styles.dot}>•</span>

//           <span className={styles.tag}>HD</span>
//         </div>

//         {/* Genres */}
//         <div className={styles.genres}>
//           {genres.map((g, index) => (
//             <span key={index}>
//               {g}

//               {index < genres.length - 1 && (
//                 <span className={styles.dot}> • </span>
//               )}
//             </span>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default MovieCard;

// kehulu yeteshale




// ----------------------------------------------
// import React from "react";
// import styles from "./MovieCard.module.css";

// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// function MovieCard({ movie }) {
//   const genres = ["Adventure", "Action", "Thriller"];

//   return (
//     <div className={styles.cardWrapper}>
//       {/* Poster */}
//       <img
//         className={styles.poster}
//         src={`${IMAGE_BASE}${movie?.poster_path}`}
//         src={movie?.poster_path}
//         alt="Poster"
//       />

//       {/* Hover Card */}
//       <div className={styles.hoverCard}>
//         {/* Hover Image */}
//         <img
//           className={styles.hoverImage}
//           // src={`${IMAGE_BASE}${movie?.backdrop_path || movie?.poster_path}`}
//           src={`${IMAGE_BASE}${movie?.poster_path}`}
//           alt="Hover image"
//         />

//         {/* Badge */}
//         <div className={styles.badge}>Recently Added</div>

//         {/* Icons Row */}
//         <div className={styles.buttonsRow}>
//           <div className={styles.circleButton}>
//             <FaCirclePlay size={40} />
//           </div>

//           <div className={styles.circleButton}>
//             <BsPlusCircle size={40} />
//           </div>

//           <div className={styles.circleButton}>
//             <GoCheckCircleFill size={40} />
//           </div>

//           {/* Right Side Icon */}
//           <div className={styles.circleButtonSmall}>
//             <IoIosArrowDropdownCircle size={40} />
//           </div>
//         </div>

//         {/* Meta Tags */}
//         <div className={styles.metaRow}>
//           <span className={styles.tag}>U/A 16+</span>

//           <span className={styles.tag}>Movie</span>

//           <span className={styles.tag}>HD</span>
//         </div>

//         {/* Genres */}
//         <div className={styles.genres}>
//           {genres.map((genre, index) => (
//             <span key={index}>
//               {genre}

//               {index < genres.length - 1 && (
//                 <span className={styles.dot}> • </span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;




// -------------------------------------------------------
import React from "react";
import styles from "./MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>

      {/* Poster */}
      <img
        className={styles.poster}
        src={
          movie?.poster_path
            ? `${IMAGE_BASE}${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie?.title || "Movie Poster"}
      />

      {/* Hover Card */}
      <div className={styles.hoverCard}>

        {/* Hover Image */}
        <img
          className={styles.hoverImage}
          src={
            movie?.backdrop_path
              ? `${IMAGE_BASE}${movie.backdrop_path}`
              : movie?.poster_path
              ? `${IMAGE_BASE}${movie.poster_path}`
              : "https://via.placeholder.com/500x300?text=No+Image"
          }
          alt={movie?.title || "Movie"}
        />

        {/* Badge */}
        <div className={styles.badge}>
          Recently Added
        </div>

        {/* Buttons */}
        <div className={styles.buttonsRow}>

          <div className={styles.circleButton}>
            <FaCirclePlay size={20} />
          </div>

          <div className={styles.circleButton}>
            <BsPlusCircle size={20} />
          </div>

          <div className={styles.circleButton}>
            <GoCheckCircleFill size={20} />
          </div>

          <div className={styles.circleButtonSmall}>
            <IoIosArrowDropdownCircle size={20} />
          </div>

        </div>

        {/* Meta Row */}
        <div className={styles.metaRow}>

          <span className={styles.tag}>U/A 16+</span>

          <span className={styles.dot}>•</span>

          <span className={styles.tag}>Movie</span>

          <span className={styles.dot}>•</span>

          <span className={styles.tag}>HD</span>

        </div>

        {/* Genres */}
        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <span key={index}>
              {genre}

              {index < genres.length - 1 && (
                <span className={styles.dot}> • </span>
              )}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MovieCard;
