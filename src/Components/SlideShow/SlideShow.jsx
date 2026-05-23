// import React from "react";

// import MovieCard from "../MovieCard/MovieCard";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";

// import styles from "./SlideShow.module.css";

// function SlideShow({ title, movies }) {
//   return (
//     <div className={styles.slideShow}>
//       {/* Title */}
//       <h2 className={styles.title}>{title}</h2>

//       {/* Slider */}
//       <div className={styles.row}>
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           grabCursor={true}
//           spaceBetween={6}
//           slidesPerView={4.4}
//           breakpoints={{
//             320: {
//               slidesPerView: 2,
//             },

//             640: {
//               slidesPerView: 3,
//             },

//             768: {
//               slidesPerView: 4,
//             },

//             1024: {
//               slidesPerView: 5.8,
//             },
//           }}
//         >
//           {/* {(movies || []).map((movie) => (
//             <SwiperSlide key={movie.id}>
//               <MovieCard movie={movie} />
//             </SwiperSlide>
//           ))} */}

//           {movies?.map((movie) => (
//             <SwiperSlide key={movie.id}>
//               <MovieCard movie={movie} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default SlideShow;

// working the above code

import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={3.5}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },

            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 3.9,
            },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
