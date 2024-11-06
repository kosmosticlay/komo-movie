export default function MovieCard({ poster, title, rating }) {
  return (
    <div className="movie-card">
      <img src={poster} />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">평점: {rating}</p>
    </div>
  );
}
