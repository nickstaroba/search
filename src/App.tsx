import { Typography } from "@mui/material";
import { Link, Route, Switch } from "wouter";

export const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="link">About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main>
      <Switch>
        <Route path="/">
          <Typography variant={"h1"}>Search</Typography>
        </Route>
        <Route path="/about">
          <Typography variant={"h1"}>About Us</Typography>
        </Route>
      </Switch>
    </main>
  </div>
);
