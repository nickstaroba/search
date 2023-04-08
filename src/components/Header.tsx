import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Link } from "wouter";

import { Search } from "./Search";

const pages = [{ href: "/about", title: "About" }];

const Logo = () => (
  <Box
    sx={{ alignItems: "center", display: "flex", gap: 1, mr: { xs: 0, md: 2 } }}
  >
    <GraphicEqIcon />
    <Typography
      component={Link}
      href={"/"}
      noWrap
      sx={{
        color: "inherit",
        fontFamily: '"Roboto Slab"',
        letterSpacing: ".25rem",
        lineHeight: 1,
        mb: "2px",
        textDecoration: "none",
        textTransform: "uppercase",
      }}
      variant={"h6"}
    >
      Company
    </Typography>
  </Box>
);

const MobileNavigation = () => {
  const [anchorNavigation, setAnchorNavigation] = useState<HTMLElement | null>(
    null
  );

  const handleOpenNavigation = (event: SyntheticEvent) => {
    setAnchorNavigation(event.currentTarget as HTMLElement);
  };

  const handleCloseNavigation = () => {
    setAnchorNavigation(null);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        aria-controls={"navigation"}
        aria-haspopup={"true"}
        aria-label={"navigation"}
        color={"inherit"}
        onClick={handleOpenNavigation}
        size={"large"}
        edge={"start"}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorNavigation}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        id={"navigation"}
        keepMounted
        onClose={handleCloseNavigation}
        open={!!anchorNavigation}
        sx={{ display: { xs: "block", md: "none" } }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <Box>
          <>
            {pages.map((page) => (
              <MenuItem
                key={page.title}
                onClick={handleCloseNavigation}
                sx={{ a: { color: "#000", textDecoration: "none" } }}
              >
                <Link href={page.href}>{page.title}</Link>
              </MenuItem>
            ))}
          </>
        </Box>
      </Menu>
    </Box>
  );
};

const Navigation = () => (
  <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
    <Box>
      <>
        {pages.map((page) => (
          <Button
            key={page.title}
            sx={{
              my: 2,
              minWidth: "auto",
              a: { color: "#fff", textDecoration: "none" },
            }}
          >
            <Link href={page.href}>{page.title}</Link>
          </Button>
        ))}
      </>
    </Box>
  </Box>
);

export const Header = () => (
  <AppBar position={"static"}>
    <Container maxWidth={"lg"}>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <MobileNavigation />
        <Logo />
        <Navigation />
        <Search />
      </Toolbar>
    </Container>
  </AppBar>
);
