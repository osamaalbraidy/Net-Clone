import Billboard from "./_components/Billboard/Billboard";
import MovieList from "./_components/MovieList/MovieList";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  const username = "osamabraidy"
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList />
      </div>
    </>
  );
}
