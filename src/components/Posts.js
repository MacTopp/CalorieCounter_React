import React, { Component } from 'react'
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';
import Chart from './Graph'

export class Posts extends Component {
  state = {
    post: [],

  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/api/post")
      .then(res => {
        const post = res.data;
        this.setState({ post });
      })
  }

  deletePost(e) {
    console.log('deleted', `http://localhost:5000/api/post/${e._id}`)

    axios.delete(`http://localhost:5000/api/post/${e._id}`)
    .then(res =>{
      window.location.reload();
    }
      );
  }
  render() {
    return (
      <div>
       <h2>Previous data</h2>
       <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
        <List>{ this.state.post.map(post =>
          <ListItem>
            <ListItemText>Burned: {post.burned}, Consumed: {post.consumed}, Time: {post.createdAt}</ListItemText>
            <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => this.deletePost(post)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
          </ListItem> )}
        </List>
        </Grid>
        <Grid item xs={12} sm={4} style={{paddingTop: '50px'}}>
          <Chart posts={this.state.post}/>
        </Grid>
        </Grid>
      
      </div>
    )
  }
}

export default Posts
