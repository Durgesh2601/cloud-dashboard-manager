import { Typography } from "@mui/material";

export const commonGridStyles = {
  border: "1px solid #f8f8f8",
  backgroundColor: "white",
  height: "20vh",
  width: "100%",
  borderRadius: "0.5em",
  boxShadow: 1,
};

export const renderGridHeader = (title: string) => {
  return (
    <Typography fontWeight={600} color={"#595959"}>
      {title}
    </Typography>
  );
};
