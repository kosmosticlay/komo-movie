// hooks/useUser.js
import { useEffect, useState } from "react";
import { supabase } from "../API/authAPI";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const { data } = await supabase.auth.getSession();
      const loggedInUser = data?.session?.user;
      setUser(loggedInUser);
    };

    // 초기 세션 가져오기
    getLoggedInUser();

    // auth 상태 변경 시 유저 정보 업데이트
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    // cleanup: 컴포넌트 언마운트 시 리스너 제거
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return user;
}
