const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(userData) {
  let { data, error } = await supabase.auth.signUp(userData);

  console.log(data);
  console.log("error : ", error);
}

export async function login(userData) {
  let { data, error } = await supabase.auth.signInWithPassword(userData);

  console.log(data);
  console.log("error : ", error);

  return { data, error };
}
