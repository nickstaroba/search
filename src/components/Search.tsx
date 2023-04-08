import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";
import { Product } from "../types";
import { Results } from "./Results";

const fetchProducts = async (query: string) => {
  try {
    return await fetch(
      `${import.meta.env.VITE_API_URL}/products?q=${query}`
    ).then((response) => response.json());
  } catch (error: unknown) {
    let message = "";
    if (typeof error === "string") {
      message = error;
    } else if (error instanceof Error) {
      message = error.message;
    }
    throw new Error(message);
  }
};

export const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleClickSearchIcon = () => {
    setIsSearchOpen(true);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    setProducts([]);
    if (debouncedSearchTerm && debouncedSearchTerm.length > 2) {
      setIsLoading(true);
      fetchProducts(debouncedSearchTerm).then((results) => {
        setProducts(results);
        setIsLoading(false);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <Box>
      <Tooltip placement={"left"} title="Search">
        <IconButton
          aria-controls={"search-dialog"}
          aria-haspopup={"true"}
          aria-label={"search"}
          color={"inherit"}
          edge={"end"}
          onClick={handleClickSearchIcon}
          size={"large"}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        fullWidth
        id={"search-dialog"}
        maxWidth={"md"}
        onClose={handleClose}
        open={isSearchOpen}
        PaperProps={{ square: true, style: { margin: 0 } }}
        sx={{
          marginTop: 9,
          padding: 0,
          "& .MuiDialog-container": {
            alignItems: "flex-start",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <DialogContent sx={{ padding: 2 }}>
          <TextField
            label="Search"
            InputProps={{
              type: "search",
              onChange: (event) => setSearchTerm(event.target.value),
            }}
            sx={{ width: "100%" }}
          />
          {!!debouncedSearchTerm && debouncedSearchTerm.length > 2 && (
            <Results
              isLoading={isLoading}
              isSearchTermSet={!!debouncedSearchTerm}
              results={products}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
