import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../views/Homepage/Homepage";
import Landing from "../views/Landing/Landing";
import About from "../views/About/About";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Homepage} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
