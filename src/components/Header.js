import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Health by KB</p>
                </div>
                <div>
                    <ul>
                        <li><Link to='/' >Home</Link> </li>
                        <li><Link to='/exercises' >Exercises</Link></li>
                        <li><Link to='/recipes' >Recipes</Link> </li>
                    </ul>
                </div>
            </div>
        )
    }
}
