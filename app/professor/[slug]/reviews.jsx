"use client";

import ProfileSection from "./profileSection";
import { createInputs } from "./rating";
export default function Reviews(props) {
  const reviews = props.reviews;

  return (
    <div className="w-full ">
      <ProfileSection data={reviews.data[0]}></ProfileSection>
      <div className=" w-full  flex ">
        <div className="">
          {reviews.data?.map((review, key) => {
            if (review.description) {
              return (
                <blockquote className="relative border-s-4 ps-4 sm:ps-6 dark:border-gray-700">
                  <div className="flex flex-row m-5 p-2">
                    {createInputs(review.overall_rating)}
                    <div className="text-xl font-semibold mx-2">
                      Overall Rating
                    </div>
                  </div>
                  <div className="flex flex-row m-5 p-2">
                    {createInputs(review.difficulty_rating)}
                    <div className="text-xl font-semibold mx-2">
                      Difficulty Rating
                    </div>
                  </div>
                  <p className="text-gray-800 sm:text-xl dark:text-white">
                    <em>{review.description}</em>
                  </p>

                  <footer className="mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-4">
                        <div className="text-base font-semibold text-gray-800 dark:text-gray-400">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {" "}
                          {Date(review?.created_at).toString().substring(4, 15)}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

