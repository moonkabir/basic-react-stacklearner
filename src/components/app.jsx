import React, {Component}from 'react';
import Profile from './profile/index';
import Skills from './profile/skills';
import Bio from './profile/bio';
import MyProps from './props'

class Child extends Component {
    render() {
        this.props.func(this);
        return <h1>I am Child</h1>
    }
}
class App extends Component{
    getContext(context) {
        console.log(context);
    }
    render() {
        this.getContext(this);
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
                <Child func={this.getContext} />
            </div>
        )
    }
}
export default App;