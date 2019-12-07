import React, { Component } from 'react';

// Bootstrap Components
import Image from 'react-bootstrap/Image';

export default class About extends Component {
    render() {
        // let image = 'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/39972116_10214188789008432_3849217499618869248_n.jpg?_nc_cat=102&_nc_ohc=3cTsygL6oT8AQm2fXP1hQNBAl2K5NuzpLcd6CGlvF1uvCI1kQhW6XlBnA&_nc_ht=scontent-den4-1.xx&oh=25439580338b391e4a90b9f2e78a5038&oe=5E86BA01'
        return (
            <div className='about-me' >
                {/* <Image src={`${image}`} roundedCircle width='250px' height='250px' /> */}
                <p className='about-me-content'>
                Hi I’m Kristi and I have a passion for health and helping people. I enjoy exercising, hanging out with friends, 
                and crafting. Summer is my favorite season and I wish it could be 80 degrees year round☀️ <br></br><br></br>
                I am a Certified Health Education Specialist (CHES). I love helping people get healthy and finding their true selves.
                </p>
                <div className='social-links'>
                    <a className="facebook" rel="noopener noreferrer" href='https://www.facebook.com/kristi.behrens.5/timeline?lst=1240671343%3A1075452843%3A1575325003' target='_blank' />
                    <a className='instagram' rel="noopener noreferrer" href='https://instagram.com/healthbykb?igshid=38wbvuzjinue' target='_blank' />
                </div>
            </div>
        )
    }
}
