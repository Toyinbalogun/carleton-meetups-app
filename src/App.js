import { Route, Switch } from "react-router-dom"; //Route is used to define different paths in the URL we want to listen to

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // localhost:3000/ --> default path then other paths will follow after "/"
  // my-page.com/

  //exact == exact={true}
  return (
    <Layout> 
      <Switch>
        <Route path="/" exact={true}> 
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
