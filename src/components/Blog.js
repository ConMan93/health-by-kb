import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FormatPost from './FormatPost';

class Blog extends Component {

    state = {
        posts: [],
    }

    componentDidMount = () => {
        axios.get('/post/blog').then(response => {
            this.setState({
                posts: response.data
            })
        })
    }

    deletePost = (id, page) => {
        axios.delete(`/post/${id}/${page}`).then( response => {
            this.setState({
                posts: response.data,
            })
        })
    }

    render() {
        let postsToRender = this.state.posts.map( post => {
            return (
                    <div key={'post' + post.id}>
                        <FormatPost 
                            id={post.id}
                            date={post.date}
                            imageurl={post.imageurl}
                            video={post.video}
                            message={post.message}
                            page={post.page}
                            title={post.title}
                            deletePost={this.deletePost}  />
                    </div>)
        });

        return (
            <div>
                {postsToRender}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Blog);