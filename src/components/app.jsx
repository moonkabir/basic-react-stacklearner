import React, {Component}from 'react';
import Profile from './profile/index';
import Skills from './profile/skills';
import Bio from './profile/bio';
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
                    <Skills skillA='Php' skillB='WordPress' skillC='JavaScript'/>
                    <p>Mr.y</p>
                    <Skills skillA='Php' skillB='WordPress' skillC='JavaScript' skillD='Laravel'/>
                    <MyProps name ="Md.Moon Kabir"/>
                    <MyProps name ="Md.Akhteruzzaman Moon"/>
                    <MyProps name ="Md.Moon"/>
                </div>
                <Bio  name ="Test" title ="title"/>
            </div>
        )
    }
}
export default App;