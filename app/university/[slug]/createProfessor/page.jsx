"use client";

import { AddProfessor } from "@/utils/serverfunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({ searchParams }) {
  const router = useRouter();

  const [Data, setData] = useState();
  const [submitStatus, setsubmitStatus] = useState({
    sent: false,
    status: null,
  });
  const formSubmit = async (event) => {
    setsubmitStatus({ sent: true, status: null });
    const professordata = {
      university_code: parseInt(searchParams.id),
      name: event.get("name"),
      department: event.get("department"),
      courses: event.get("course") || "",
      created_by: -1,
      description: {
        gender: event.get("gender"),
        external: event.get("external"),
      },
    };
    console.log(professordata);
    const status = await AddProfessor(professordata);
    if (status.status == 201)
      router.push(`/university/reviewCreated?id=${searchParams.id}`);
    else {
      setsubmitStatus({ sent: false, status: status.status });
    }
  };
  return (
    <div className="w-full md:w-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Add Professor
          </h1>
        </div>

        <div className="mt-12">
          <form action={formSubmit}>
            <div className="grid gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-work-email-hire-us-2"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Name
                </label>
                <input
                  required={true}
                  type="text"
                  name="name"
                  maxLength={25}
                  id="hs-work-email-hire-us-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>

              <div>
                <label
                  for="hs-about-hire-us-2"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Department
                </label>
                <input
                  required={true}
                  id="hs-about-hire-us-2"
                  name="department"
                  rows="1"
                  maxLength={25}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                ></input>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    for="hs-company-hire-us-2"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    required={true}
                    type="text"
                    name="gender"
                    id="hs-company-hire-us-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label
                    for="hs-company-hire-us-2"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    External
                  </label>
                  <select
                    required={true}
                    type="text"
                    name="external"
                    id="hs-company-hire-us-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  for="hs-about-hire-us-2"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Course
                </label>
                <input
                  required={true}
                  id="hs-about-hire-us-2"
                  name="course"
                  rows="1"
                  maxLength={25}
                  className="py-3 px-4 block w-40 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                ></input>
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
                // disabled={submitStatus.sent}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:bg-blue-100 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-cookies"
              >
                Add Professor
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
