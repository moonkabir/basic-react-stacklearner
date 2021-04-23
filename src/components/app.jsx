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
const ChildComponent = props => (
    <div>
        <h3>I am Child Component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
)
class App extends Component{
    //constructor is old style react 16 
    // constructor(props){
    //     super(props);
    //     this.count = 0;
    //     this.state = {
    //         count: 0
    //     } 
    // }

    // count = 10;

    state = { 
        count:0
    };

    getContext(context) {
        console.log(context);
    }
    render() {
        // this.getContext(this);
        // console.log(this.count);
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
                {/* <Child func={this.getContext} /> */}
                <ChildComponent>
                    <h3>I am from Parent Component</h3>
                </ChildComponent>
                <h1>Count: {this.state.count}</h1>
                <button
                    // onClick={() => {
                    //     this.setState({count: this.state.count + 1});
                    //     console.log('clicked...',this.state.count);
                    // }}
                    onClick={() =>{
                        this.setState(
                            prev =>{
                                return{
                                    count:prev.count + 1
                                }
                            }
                        )
                        console.log('clicked...',this.state.count);
                    }}
                >
                    add+1</button>
            </div>
        )
    }
}
export default App;