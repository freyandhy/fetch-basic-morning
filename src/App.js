import React, { Component } from "react"
import PostList from "./PostList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      posts: []
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })

    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(res => res.json())
    .then(result => {
      this.setState({
        posts: result,
        isLoading: false
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    const { posts, isLoading } = this.state
    return (
      <>
        <h1>Fetch Basic</h1>
        { isLoading && <h3>Loading...</h3>}
        { !isLoading && <PostList data={posts} /> }
      </>
    )
  }  
}

export default App;