"use client";
import Link from "next/link";
import { useState } from "react";
import SchoolList from "../utils/school";
export default function UniversitySearch() {
  const [SearchList, setSearchList] = useState(SchoolList);

  function DynamicSearch(inputString) {
    const newSearchList = SchoolList.filter(
      (words) => RegExp(inputString, "gmi").test(words.University) == true
    );

    setSearchList(newSearchList);
  }

  return (
    <form>
      <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
        <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
          <label
            // for="hs-hero-name-1"
            className="block text-sm font-medium dark:text-white"
          >
            <span className="sr-only">School</span>
          </label>
          <input
            type="text"
            id="hs-hero-name-1"
            onChange={(e) => DynamicSearch(e.target.value)}
            className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="School"
          />
          <div
            className={`max-h-40 w-full overflow-y-scroll scroll-smooth m-1 ${
              SchoolList.length == SearchList.length ? "hidden" : ""
            } `}
            id="style-7"
          >
            {SearchList?.map((university, key) => (
              <div
                key={key}
                className="w-full hover:bg-blue-400/10 rounded border-b "
              >
                <Link
                  href={`/university/${university.University}?id=${university.Rank}`}
                  className="font-bold  p-1 "
                >
                  {university.University}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Get started
          </a>
        </div>
      </div>
    </form>
  );
}
