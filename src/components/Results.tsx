import { Box } from "@mui/material";

import { Product } from "../types";
import { ProductCard } from "./ProductCard";

type ResultsProps = {
  isLoading: boolean;
  isSearchTermSet: boolean;
  results: Product[];
};

export const Results = ({
  isLoading,
  isSearchTermSet,
  results,
}: ResultsProps) => {
  const resultCards = results.map(({ id, image, name, description }) => (
    <ProductCard
      description={description}
      image={image}
      key={id}
      title={name}
    />
  ));
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
        marginTop: 2,
      }}
    >
      {isLoading && "Loading..."}
      {!isLoading && results.length === 0 && isSearchTermSet && "No Results"}
      {resultCards}
    </Box>
  );
};
