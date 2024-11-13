import { useEffect } from "react";

export function useRemoveFocus(ref, onBlurCallback, clearIconRef = {}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        (!clearIconRef.current || !clearIconRef.current.contains(event.target))
      ) {
        onBlurCallback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onBlurCallback, clearIconRef]);
}
