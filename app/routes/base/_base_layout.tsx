import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FloatFooter from "~/atomic_design/organisms/footers/footer3";
import { useEffect, useRef } from "react";
import FloatAppBar from "~/atomic_design/organisms/appBars/float_app_bar";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";
import { useScroll } from "~/utilities/hooks/scroll_provider";

export default function Layout() {
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
      <Box component="main" ref={mainRef} flex={1} overflow="auto">
        <FloatAppBar />
        <Box
          height={CustomSx.header.height}
          sx={{ backgroundColor: theme.palette.primary.main }}
        ></Box>
        <Outlet />
        <FloatFooter />
      </Box>
    </Box>
  );
}
