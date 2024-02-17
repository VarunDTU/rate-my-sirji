import { GetUniversityById } from "@/utils/serverfunctions";
import Display from "./display";
import Loading from "./loading";
export default async function Page({ searchParams }) {
  const UniData = await GetUniversityById(searchParams?.id);
  return (
    <div className="w-full" fallback={<Loading></Loading>}>
      {UniData ? (
        <Display unidata={UniData}></Display>
      ) : (
        <h1>page not found</h1>
      )}
    </div>
  );
}
