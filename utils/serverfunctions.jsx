"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GetUniversityById(UniversityId) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from("Organization")
    .select()
    .eq("Rank", UniversityId);

  const Professors = await supabase
    .from("professor")
    .select("courses,name,department,id")
    .eq("university_code", UniversityId);

  return { data: data, Professors: Professors.data };
}
export async function GetProfessorById(ProfessorsId) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from("full_reviews")
    .select()
    .eq("professor", ProfessorsId);

  return { data };
}

export const getUser = async () => {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.from("users").select();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { data, user };
};
export const updateUser = async (providedData) => {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await supabase
    .from("users")
    .update({
      name: providedData.name,
      date_of_birth: providedData.age,
      university: providedData.university,
      bio: providedData.bio,
    })
    .eq("user_id", user.id);
  if (data?.error != null)
    return {
      message: "error updating profile try again later",
      status: 400,
    };
  return {
    message: "Profile Updated",
    status: 200,
  };
};
