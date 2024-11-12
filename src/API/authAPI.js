const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(userData) {
  let { data, error } = await supabase.auth.signUp(userData);

  console.log(data);
  console.log("error : ", error);
}

/* 이메일 로그인 */
export async function login(userData) {
  let { data, error } = await supabase.auth.signInWithPassword(userData);

  console.log(data);
  console.log("error : ", error);

  return { data, error };
}

/* 소셜 로그인 (구글) */
export async function socialLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://qhzbirqbyqijlvfopawu.supabase.co/auth/v1/callback",
    },
  });

  console.log(data);
  console.log("error : ", error);
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  return error;
}
