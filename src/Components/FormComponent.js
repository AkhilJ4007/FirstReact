import React, { Component } from 'react'

 class FormComponent extends Component {

    constructor(){
        super()
        this.state = {
            username : '',
            comments : '',
            topic : 'react'
        }
      
        this.userNameEnter =  this.userNameEnter.bind(this)
       

    }

    userNameEnter(event) {
        
       this.setState({
            username : event.target.value,
            comments : event.target.value
       })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    render() {
        return (
            <form>
                <div> 
                    <label>UserName </label>
                    <input type = 'text' value = {this.state.username} onChange = {this.userNameEnter} />
                </div>
                <div>
                    <label>Comments </label>
                    <input type = 'text' value = {this.state.comments} onChange = {this.userNameEnter}  />
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange = {this.handleTopicChange}>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type = 'submit'>Submit</button>

            </form>
        )
    }
}

export default FormComponent
