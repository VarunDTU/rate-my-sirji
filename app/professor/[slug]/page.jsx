import { GetProfessorById } from "@/utils/serverfunctions";
import Reviews from "./reviews";
export default async function Page({ searchParams, params }) {
  const id = searchParams.id;
  const professorReviews = await GetProfessorById(id);
  return (
    <div className="min-w-screen">
      <Reviews
        className="min-w-screen"
        reviews={professorReviews}
        id={searchParams.id}
      ></Reviews>
    </div>
  );
}
