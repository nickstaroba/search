import { Container, Typography } from "@mui/material";
import { Route } from "wouter";

import { Header } from "./Header";
import { PageHeading } from "./PageHeading";

export function App() {
  return (
    <>
      <Header />
      <Container sx={{ paddingY: 2 }} maxWidth={"lg"}>
        <Route path={"/"}>
          <PageHeading heading={"In Stock"} />
          <Typography>...</Typography>
        </Route>
        <Route path={"/about"}>
          <PageHeading heading={"About"} />
          <Typography>...</Typography>
        </Route>
      </Container>
    </>
  );
}
