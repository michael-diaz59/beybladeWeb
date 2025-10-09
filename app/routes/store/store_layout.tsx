import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export default function StoreLayout() {
  return (
    <Box component="main" display="flex" flexDirection="column" height="100vh">
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </Box>
  );
}
