import React, {Component}from 'react';
import Profile from './profile/index';
class App extends Component{
    render() {
        return (
            <div>
                <h1>Hello come from app.jsx file</h1>
                <Profile />
            </div>
        )
    }
}
export default App;