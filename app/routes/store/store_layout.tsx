import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { useScroll } from "~/utilities/hooks/scroll_provider";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import FloatFooter from "~/atomic_design/organisms/footers/footer3";
import FloatAppBar from "~/atomic_design/organisms/appBars/float_app_bar";

export default function StoreLayout() {
    const theme = useTheme();
    const mainRef = useRef<HTMLElement>(null);

    const { setScrollTarget } = useScroll();
      useEffect(() => {
      if (mainRef.current && setScrollTarget) {
        setScrollTarget(mainRef.current);
        // Cuando el layout se desmonta, limpia el listener
        return () => setScrollTarget(null);
      }
    }, [setScrollTarget]);
    


  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box component="main" flex={1} ref={mainRef} overflow="auto">
        <FloatAppBar />
        <Outlet />
        <FloatFooter />
      </Box>
    </Box>
  );
}
