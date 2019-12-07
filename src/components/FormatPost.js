import React, { Component } from 'react';
import { connect } from 'react-redux';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class FormatPost extends Component {

    render() 
    {
        return (
            <Card className='post-container'>
                <Card.Header>{this.props.date.substring(0, 15)}</Card.Header>
                {this.props.imageurl && <Card.Img src={this.props.imageurl} className='post-image' />}
                {this.props.video && <iframe src={this.props.video} width='100%' height='350px;' title={`${this.props.page} video`} />}
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text className='post-textarea'>{this.props.message}</Card.Text>
                </Card.Body>
                {this.props.user.permissions === 'ADMIN' && <Button variant='light' onClick={() => this.props.deletePost(this.props.id, this.props.page)}>Delete</Button>}
            </Card>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }

}

export default connect(mapStateToProps, null)(FormatPost);