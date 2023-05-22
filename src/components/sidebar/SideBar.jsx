import { Stack } from "@mui/material";

export default function SideBar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      <SideBar />
    </Stack>
  );
}
