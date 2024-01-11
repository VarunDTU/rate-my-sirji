import { GetProfessorById } from "@/utils/serverfunctions";
import Reviews from "./reviews";
export default async function Page({ searchParams, params }) {
  const id = searchParams.id;
  const professorReviews = await GetProfessorById(id);
  return (
    <div className="max-w-screen">
      <Reviews reviews={professorReviews} id={searchParams.id}></Reviews>
    </div>
  );
}
