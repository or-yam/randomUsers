import { useEffect, useState } from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Accessorizes/Header';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Map from './components/Map/Map';

import apiUrls from './assets/apiUrl.json';

const { usersUrl, postsUrl } = apiUrls;

function App() {
  const [usersList, setUsersList] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [currentUSer, setCurrentUser] = useState({});

  const fetchData = (url, setFunction) => {
    axios
      .get(url)
      .then(({ data }) => setFunction(data))
      .catch((err) => err);
  };

  useEffect(() => {
    fetchData(usersUrl, setUsersList);
    fetchData(postsUrl, setPostsList);
  }, []);

  const removeUser = (id) => {
    const updatedUsersList = [...usersList];
    const userIndex = updatedUsersList.findIndex((user) => user.id === id);
    updatedUsersList.splice(userIndex, 1);
    setUsersList(updatedUsersList);
  };

  const removeUserPosts = (id) => {
    const updatedPostList = [...postsList].filter((post) => post.userId !== id);
    setPostsList(updatedPostList);
  };

  const removeAllUserData = (id) => {
    removeUser(id);
    removeUserPosts(id);
  };

  const filterCurrentUserPosts = () =>
    postsList.filter((post) => post.userId === currentUSer.id);

  const removePost = (id) => {
    const updatedPostList = [...postsList];
    const postIndex = updatedPostList.findIndex((post) => post.id === id);
    updatedPostList.splice(postIndex, 1);
    setPostsList(updatedPostList);
  };

  const editPost = (id, body, title) => {
    const updatedPostList = [...postsList];
    const postIndex = updatedPostList.findIndex((post) => post.id === id);
    updatedPostList[postIndex].body = body;
    updatedPostList[postIndex].title = title;
  };

  return (
    <Router>
      <Header text={'RANDOM USERS'} />
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Users
              users={usersList}
              removeAllUserData={removeAllUserData}
              setCurrentUser={setCurrentUser}
            />
            <Posts
              posts={filterCurrentUserPosts()}
              removePost={removePost}
              editPost={editPost}
            />
          </>
        )}
      />
      <Route path="/map" exact render={() => <Map userData={currentUSer} />} />
    </Router>
  );
}

export default App;
