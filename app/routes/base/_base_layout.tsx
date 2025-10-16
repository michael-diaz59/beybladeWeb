import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FloatFooter from "~/atomic_design/organisms/footers/footer3";
import FloatAppBar from "~/atomic_design/organisms/appBars/float_app_bar";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";

export default function Layout() {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box component="main" flex={1} overflow="auto">
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
