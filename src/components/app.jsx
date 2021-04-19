import React, {Component}from 'react';
import Profile from './profile/index';
import Skills from './profile/skills';
import MyProps from './props'
class App extends Component{
    render() {
        return (
            <div>
                <h1>Hello come from app.jsx file</h1>
                <Profile />
                <div style={{marginTop:'30px'}}>
                <h3>List of Programmer</h3>
                <p>Mr.X</p>
                <Skills/>
                <p>Mr.y</p>
                <Skills/>
                <MyProps name ="Md.Moon Kabir"/>
                <MyProps name ="Md.Akhteruzzaman Moon"/>
                <MyProps name ="Md.Moon"/>
                </div>
            </div>
        )
    }
}
export default App;