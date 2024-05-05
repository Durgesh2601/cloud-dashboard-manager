import { Typography } from "@mui/material";
import { RenderGridHeaderProps } from "../../types";

export const RenderGridHeader = ({ title }: RenderGridHeaderProps) => {
  return (
    <Typography fontWeight={600} color={"#595959"}>
      {title}
    </Typography>
  );
};
