"use client";
import { updateUser } from "@/utils/serverfunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function ProfileTab(props) {
  const user_data = props?.user;
  const [info, setinfo] = useState(false);
  const [editor, seteditor] = useState(props.editor);
  const router = useRouter();
  const [data, setData] = useState({
    name: user_data.data != null ? user_data?.data[0]?.name : "",
    university: user_data.data != null ? user_data?.data[0]?.university : "",
    age: user_data.data != null ? user_data?.data[0]?.date_of_birth : "",
    bio: user_data.data != null ? user_data?.data[0]?.bio : "",
  });
  async function search(formData) {
    const updatedUser = await updateUser(data);
    setinfo(updatedUser?.status == 200);
    if (info) seteditor(false);
  }

  return (
    <div className="max-w-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      <div className=" items-center gap-12 w-full flex justify-center">
        <div className="relative">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
            <div className="w-full flex  justify-end">
              <button
                onClick={() => {
                  seteditor(!editor);
                  setData({
                    name:
                      user_data.data != null ? user_data?.data[0]?.name : "",
                    university:
                      user_data.data != null
                        ? user_data?.data[0]?.university
                        : "",
                    age:
                      user_data.data != null
                        ? user_data?.data[0]?.date_of_birth
                        : "",
                    bio: user_data.data != null ? user_data?.data[0]?.bio : "",
                  });
                }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {editor ? "Cancel" : " Edit Profile"}
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              <div
                className={`${
                  user_data?.data == null && user_data?.data[0]?.name != null
                    ? "hidden"
                    : ""
                }Complete your`}
              >
                Profile
              </div>
            </h2>

            <form action={search}>
              <div className="mt-6 grid gap-4 lg:gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    UserName *Displayed
                  </label>
                  <input
                    required={true}
                    type="text"
                    disabled={!editor}
                    value={data.name}
                    onChange={(e) =>
                      setData({
                        name: e.target.value,
                        university: data.university,
                        age: data.age,
                        bio: data.bio,
                      })
                    }
                    name="hs-firstname-hire-us-1"
                    id="hs-firstname-hire-us-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      School
                    </label>
                    <input
                      required={true}
                      type="text"
                      disabled={!editor}
                      value={data.university}
                      onChange={(e) =>
                        setData({
                          name: data.name,
                          university: e.target.value,
                          age: data.age,
                          bio: data.bio,
                        })
                      }
                      name="hs-company-hire-us-1"
                      id="hs-company-hire-us-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                      Date of Birth
                    </label>
                    <input
                      required={true}
                      type="date"
                      disabled={!editor}
                      value={data.age}
                      onChange={(e) =>
                        setData({
                          name: data.name,
                          university: data.university,
                          age: e.target.value,
                          bio: data.bio,
                        })
                      }
                      name="hs-company-website-hire-us-1"
                      id="hs-company-website-hire-us-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="hs-about-hire-us-1"
                    name="hs-about-hire-us-1"
                    rows="4"
                    disabled={!editor}
                    value={data.bio}
                    onChange={(e) =>
                      setData({
                        name: data.name,
                        university: data.university,
                        age: data.age,
                        bio: e.target.value,
                      })
                    }
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              <div className={`${!editor ? "hidden" : ""} mt-6 grid`}>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
