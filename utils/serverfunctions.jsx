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

  return {
    UniversityId: UniversityId,
    data: data,
    Professors: Professors.data,
  };
}
export async function GetProfessorById(ProfessorsId) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from("professor_reviewss")
    .select()
    .eq("id", ProfessorsId);

  return { data };
}
export async function AddReview(ProfessorsId, review) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await getUser();
  const data = await supabase.from("Reviews").insert({
    professor: ProfessorsId,
    ...review,
    user_id: parseInt(user.data[0].id),
  });
  //console.log(data);
  return data;
}
export async function AddProfessor(ProfessorData) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await getUser();
  const user_id = await supabase
    .from("users")
    .select("id")
    .eq("user_id", user.user.id);

  var professorCourses = [];

  ProfessorData.created_by = user_id.data[0].id;
  professorCourses.concat(await supabase.from("professor").select("courses"));
  professorCourses.push(ProfessorData.course);
  ProfessorData.courses = professorCourses;
  const data = await supabase.from("professor").insert({
    ...ProfessorData,
  });
  console.log(data);
  return data;
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
