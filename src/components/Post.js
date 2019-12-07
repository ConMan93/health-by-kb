import React, { Component } from 'react';
import axios from 'axios';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

class Post extends Component {

    state = {
        message: '',
        date: '',
        imageurl: '',
        video: '',
        page: '',
        title: '',
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    submitPost = () => {
        if (this.state.page === '')
        {
            this.setState({
                page: 'exercise',
            })
        }

        this.setState({
            date: new Date().toString()
        }, () => {
            let { date, imageurl, video, message, page, title } = this.state
            
            axios.post('/post/create', {date, imageurl, video, message, page, title}).then( response => {
                this.props.history.push(`/${this.state.page}s`);
            })
        })
    }

    render() {
        return (
            <Form className='form'>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="imageurl" value={this.state.imageurl} onChange={this.handleChange} />
                    {this.state.imageurl && <Image src={this.state.imageurl} className='preview-image' width='25%' height='25%' style={{ alignItems: 'center'}} />}
                </Form.Group>

                <Form.Group controlId="formVideoUrl">
                    <Form.Label>Video URL</Form.Label>
                    <Form.Control name='video' value={this.state.video} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' value={this.state.title} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formContent">
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control className='post-textarea' as='textarea' rows='4' name='message' value={this.state.message} onChange={this.handleChange} />
                </Form.Group>

                <Form.Check type='radio' name='page' value='exercise' onChange={this.handleChange} label="Exercise"></Form.Check> 
                <Form.Check type='radio' name='page' value='recipe' onChange={this.handleChange} label="Recipe"></Form.Check> 
                <Form.Check type='radio' name='page' value='blog' onChange={this.handleChange} label="Blog"></Form.Check> 
                <Form.Check type='radio' name='page' value='motivation' onChange={this.handleChange} label="Motivation"></Form.Check> 

                <Form.Group controlId='formButtons' className='form-buttons' >
                    <Button variant='dark' onClick={this.submitPost} >Submit Post</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default Post;