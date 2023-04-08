import { Typography } from "@mui/material";

type PageHeadingProps = {
  heading: string;
};

export const PageHeading = ({ heading }: PageHeadingProps) => (
  <Typography
    sx={{
      color: "#000",
      opacity: 0.6,
      fontSize: 24,
      fontWeight: 700,
      marginY: 2,
      textTransform: "capitalize",
    }}
    variant={"h1"}
  >
    {heading}
  </Typography>
);
