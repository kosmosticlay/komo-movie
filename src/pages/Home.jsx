import MovieCardList from "../components/MovieCardList";

export default function Home() {
  //console.log(movies);
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Home 컴포넌트</h1>
      <MovieCardList showPagination={true} />
    </>
  );
}
