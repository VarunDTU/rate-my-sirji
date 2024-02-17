"use client";

import { AddReview } from "@/utils/serverfunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({ searchParams }) {
  const router = useRouter();
  const [Data, setData] = useState({
    heading: "",
    description: "",
    course: "",
    overall_rating: 0,
    difficulty_rating: 0,
    attendance: false,
  });
  const [submitStatus, setsubmitStatus] = useState({
    sent: false,
    status: null,
  });
  const formSubmit = async (event) => {
    setsubmitStatus({ sent: true, status: null });
    setData({
      heading: event.get("heading"),
      description: event.get("description"),
      course: event.get("course") || "",
      overall_rating: event.get("overall_rating"),
      difficulty_rating: event.get("difficulty_rating"),
      attendance: event.get("attendance") & 1,
    });
    const status = await AddReview(searchParams.id, Data);
    setsubmitStatus({ sent: true, status: status.status });
    if (status.status == 201) router.push("/professor/reviewCreated?id=1");
  };
  return (
    <div className="w-full md:w-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Add Review
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Tell us your experience
          </p>
        </div>

        <div className="mt-12">
          <form action={formSubmit}>
            <div className="grid gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-work-email-hire-us-2"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Heading
                </label>
                <input
                  required={true}
                  type="text"
                  name="heading"
                  id="hs-work-email-hire-us-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    for="hs-company-hire-us-2"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Difficulty Rating
                  </label>
                  <select
                    required={true}
                    type="number"
                    name="difficulty_rating"
                    id="hs-company-hire-us-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>
                  <label
                    for="hs-company-hire-us-2"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Overall Rating
                  </label>
                  <select
                    required={true}
                    type="number"
                    name="overall_rating"
                    id="hs-company-hire-us-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  for="hs-about-hire-us-2"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Description
                </label>
                <textarea
                  required={true}
                  id="hs-about-hire-us-2"
                  name="description"
                  rows="4"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                ></textarea>
              </div>
            </div>

            {/* <div className="mt-3 flex">
              <div className="flex">
                <input
                  required={true}
                  id="remember-me"
                  name="attendance"
                  type="checkbox"
                  className="w-5 shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div className="ms-3">
                <label
                  for="remember-me"
                  className=" text-gray-600 dark:text-gray-400"
                >
                  Attendance Required
                </label>
              </div>
            </div> */}

            <div className="mt-6 grid">
              <button
                type="submit"
                hidden={submitStatus.sent}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:bg-blue-100 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-cookies"
              >
                {" "}
                `${console.log(submitStatus)}` Add Review
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 hidden">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Modal className={`${submitStatus.sent ? "visible" : "hidden"}`}></Modal> */}
    </div>
  );
}
