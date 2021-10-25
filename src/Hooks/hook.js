import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    //dont forget to return from useEffect(that's so called clean-up)
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
