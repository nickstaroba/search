/* eslint-disable global-require, import/no-dynamic-require */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type ProductCardProps = {
  description: string;
  image: string;
  title: string;
};

export const ProductCard = ({
  description,
  image,
  title,
}: ProductCardProps) => (
  <Card>
    <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);
