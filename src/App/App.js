import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../views/Homepage/Homepage";
import Landing from "../views/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
