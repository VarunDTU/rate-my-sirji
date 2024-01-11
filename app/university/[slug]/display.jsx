"use client";
import Link from "next/link";
export default function Display(props) {
  const Data = props?.unidata;

  return (
    <div className="w-full text-center">
      <div>
        <h1 className="font-bold text-3xl mt-4 p-2">
          {Data?.data[0].University}{" "}
        </h1>
        <h2>{Data?.data[0].Town}</h2>
      </div>
      <div>
        <div className=" text-center p-2 m-1  font-semibold md:mx-20 text-2xl  border-black dark:border-white rounded-md">
          Professors{" "}
          <div className="font-normal text-sm">
            {Data?.Professors.length} result
          </div>
        </div>
        <div className="mt-7  m-5 p-2 mx-20 ">
          {Data?.Professors.map((professor, key) => {
            return (
              <Link
                href={`/professor/(professor.name)?id=${professor.id}`}
                className="  text-xl flex items-start justify-start flex-col border rounded-md dark:border-white border-black p-2 "
              >
                <div>{professor.name}</div>
                <div className="text-sm">{professor.department}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
