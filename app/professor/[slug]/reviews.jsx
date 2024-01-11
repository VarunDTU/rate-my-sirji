"use client";

import ProfileSection from "./profileSection";
import { GoldStars, MukStars } from "./rating";
export default function Reviews(props) {
  const reviews = props.reviews;

  return (
    <div className=" max-w-full flex flex-col">
      <ProfileSection data={reviews.data[0]}></ProfileSection>
      <div>
        {reviews.data?.map((review, key) => {
          return (
            <div key={key} className="max-w-full">
              <div className="text-xl text-gray-800">
                <div className=" z-10 dark:text-white text-sm">
                  <div className=" flex flex-row items-center justify-evenly text-lg m-4 p-2 ">
                    <div className="flex flex-row text-6xl font-extrabold">
                      {review.overall_rating}
                      <div className="text-sm p-1 flex items-end">
                        /5-Overall rating
                      </div>
                    </div>
                    <div className="flex flex-row text-6xl font-extrabold">
                      {review.difficulty_rating}
                      <div className="text-sm p-1 flex items-end">
                        /5-Difficulty rating
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mx-5 items-end justify-end text-lg">
                    {review.description}
                    <div className="text-sm flex flex-col">
                      <div>{review.name || "Anonymous"} on </div>
                      <div>
                        {Date(review?.created_at).toString().substring(4, 15)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const createInputs = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(<GoldStars />);
  }
  for (let i = 0; i < 5 - count; i++) {
    arr.push(<MukStars />);
  }
  return arr;
};
