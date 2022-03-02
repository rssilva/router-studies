import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { NewArea } from "./NewArea/NewArea";
import { Posts } from "./NewArea/Posts";
import { NotFound } from "./NotFound";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setPosts(json);
          setLoading(true);
        });
    };

    setTimeout(() => {
      fetchData();
    }, 4000);
  }, [posts]);

  return (
    <div className="App">
      <div>{posts.length}</div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          {posts.length && <NewArea />}
          {/* <NewArea /> */}
          {/* {!loading && <Route render={() => <NotFound />} />} */}
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
