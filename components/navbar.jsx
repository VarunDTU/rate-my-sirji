import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import AuthButton from "../components/AuthButton";

export default function Navbar() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/" className="font-bold text-2xl">
          Rate my sirji{" "}
          <div className="text-sm font-thin border text-center"> Beta</div>
        </Link>
        <div className="flex flex-row ">
          <Link
            href="/profile"
            className="p-2 m-4  dark:hover:bg-slate-800 dark:bg-gray-900  hover:bg-gray-300 bg-gray-200 rounded-md"
          >
            Account
          </Link>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </div>
    </nav>
  );
}
