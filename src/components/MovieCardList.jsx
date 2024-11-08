import { BASE_URL } from "../App";
import MovieCard from "./MovieCard";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MovieCardList({ showPagination = false, movies }) {
  return (
    <div className={`${showPagination ? "h-[350px]" : "h-auto"} flex w-full`}>
      <Swiper
        className="relative w-4/5"
        modules={[Navigation, showPagination ? Pagination : null]}
        navigation
        pagination={showPagination ? { clickable: true } : false}
        slidesPerView="auto"
        slidesPerGroup={4}
        speed={800}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="flex items-center justify-center max-w-48"
          >
            <MovieCard
              id={movie.id}
              poster={`${BASE_URL}${movie.backdrop_path}`}
              title={movie.title}
              rating={movie.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
