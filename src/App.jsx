import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

import "./styles.scss";
import Main from "./components/Main";

export default function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Router>
  );
}
