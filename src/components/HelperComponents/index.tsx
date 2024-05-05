import { Typography } from "@mui/material";

interface RenderGridHeaderProps {
  title: string;
}

export const RenderGridHeader = ({ title }: RenderGridHeaderProps) => {
  return (
    <Typography fontWeight={600} color={"#595959"}>
      {title}
    </Typography>
  );
};
