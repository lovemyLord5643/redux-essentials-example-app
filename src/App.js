import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { NotificationsList } from './features/notifications/NotificationsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { UserPage } from './features/users/UserPage'
import { UsersList } from './features/users/UsersList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/posts/:id" component={SinglePostPage} />
          <Route exact path="/editPost/:id" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
