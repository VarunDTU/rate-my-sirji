import { getUser } from "@/utils/serverfunctions";
import { ProfileTab } from "./ProfileForm";
export default async function Page() {
  const { data, user } = await getUser();
  const editor = data.name == null;
  return (
    <div className="w-full items-center text-center justify-center m-5">
      Hey, {user?.email}
      <ProfileTab user={{ user, data, editor }}></ProfileTab>
    </div>
  );
}
