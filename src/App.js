import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import Post from "./user/Post";

function App() {
  /*
  TODO: There is no need to add a <Router >, it is in index.js.

  The <CardList /> component should be shown when the user is on the index path.

  The <User /> component should be shown when the user is on the following path:
  /users/:userId

  Display <NotFound /> when appropriate
*/
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/users/:userId/*" element={<User />} />
        {/* <Route path="/users/:userId/posts" element={<Post />} /> */}

      </Routes>
    </div>
  );
}

export default App;