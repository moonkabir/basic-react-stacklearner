import React from 'react';
import './profile.style.css'
import Bio from './bio'
import Skills from './skills'
import Links from './links'

class Profile extends React.Component {
    me = {
        name: 'Md.Akhteruzzama Moon',
        title: 'Full Stack Developer,Enterprenuer,Trainer',
        skillA: 'Php',
        skillB: 'WordPress',
        skillC: 'Laravel',
        skillD: 'JavaScript',
    }
    render() {
        return (
            <div className="container">
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} skillD={this.me.skillD}/>
                <Links/>
            </div>
        )
    }
}

export default Profile;