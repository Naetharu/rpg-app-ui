import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const useLayoutChecker = (breakpoint: number) => {
  const { width } = useViewportSize();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (width < breakpoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [width]);

  return isMobileView;
};
