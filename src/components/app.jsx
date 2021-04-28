import React, {Component}from 'react';
import classes from './app.module.css';
class App extends Component {
    state={
        count:0
    }
    intervalId = null;
    increamentCount = () =>{
        this.setState({count: this.state.count + 1 });
    }
    decreamentCount = () =>{
        if(this.state.count>0){
            this.setState({count: this.state.count - 1 });
        }
    }
    setTimer = () =>{
        if(this.state.count > 0 && !this.intervalId){
            this.intervalId = setInterval(() =>{
                this.setState({count: this.state.count -1 }, () =>{
                    if(this.state.count === 0){
                        alert('Timer expired');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            },1000);
        }
    }
    setReset = () =>{
        this.setState({count: 0})
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    setPause = () =>{
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    render() {
        return (
            <div className="App">
                <h1 className="Heading"> Simple Timer</h1>
                <div className="Container">
                    <button className="Btn" onClick={this.decreamentCount}>-</button>
                    <span className="text">{this.state.count}</span>
                    <button className="Btn" onClick={this.increamentCount}>+</button>
                </div>
                <div className="Container">
                    <button className="Btn" onClick={this.setTimer}>Start</button>
                    <button className="Btn" onClick={this.setReset}>Reset</button>
                    <button className={classes.button} onClick={this.setPause}>Pause</button>
                </div>
            </div>
        );
    }
}
export default App;