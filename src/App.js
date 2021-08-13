import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchHeader from "./components/Search/SearchHeader";

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path='/search'>
            <SearchHeader />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
