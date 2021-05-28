import React from 'react';
class Inputs extends React.Component{
    state = {
        name:"",
        country:"",
        bio:"",
        birthday:"",
        gender:"",
        agree: false
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleCheck = event => {
        this.setState({
            agree: event.target.checked
        })
    }
    render(){
        const { name, country, bio, birthday, agree} = this.state;
        return(
            <div>
                <h1>Inputs</h1>
                <input 
                    className="form-control my-2"
                    type="text" 
                    name="name"
                    placeholder="Moon Kabir"
                    value={name}
                    onChange={this.handleChange}
                />
                <select  
                    className="form-control my-2"   
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                >
                    <option>Select country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                </select>
                <textarea 
                    className="form-control my-2"
                    name="bio" 
                    value={bio}
                    onChange={this.handleChange}
                    placeholder="Tell Me about yourself"
                ></textarea>
                <input 
                    type="date" 
                    className="form-control my-2"
                    name="birthday"
                    value={birthday}
                    onChange={this.handleChange}
                />
                <div>
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>Female
                </div>
                <div>
                    <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheck}/>
                    I agree to all the terms and conditions 
                </div>
                <button onClick={ ()=> console.log(this.state)}>
                    Show Data
                </button>
            </div>
        );
    }
}

export default Inputs;  