import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Counter from "./Components/Counter"
import FunctionClick from './Components/FuntionClick'
import ClassClick from './Components/ClassClick'
import ParentComponent from './Components/ParentComponent'
import FormComponent from './Components/FormComponent'
import ParentComp from './Components/ParentComp'

var style = {
  backgroundColor:'black',
  color:'blue',
  textAlign:'center'
}


// class MyComponent extends React.Component{
//   render(){
//     return(
//       <div style = {style}> Chumma </div>
//     );
//   }

// }

let books = [
{
  "name" : "sfsaf",
  "date" : "sdfsd"
},
{
  "name" : "cvxvx",
  "date" : "erwr"
}
]

// const Comp = props => {
//   return(
//     <div>
//    <ul>
//      {
//        props.list.map((book,i) => { 
        
//        return (<li key = {i}>{book.name}</li>);
//        }
//        )
//      }

//    </ul>
//    {props.children}
//    </div>
//   )
// }

// const Container = (props) => {

//   return(
//     <div style = {style}>
//     <Comp list = {props.books}> 
//     <p>Whadup kiddoss!!</p>
//      </Comp>
//     </div>

//   )

// }

class Container extends React.Component{

  constructor(){
    super()
    this.state = {
      message:"Myruu"
       }
      this.display_myru =  this.display_myru.bind(this)
   
  }

  display_myru(){
      this.setState({
        message : "Kittii"
      }
      );
  }

  render(){
    return(
    <div style ={{textAlign:'center'}}> 
    <h1 style = {this.props.style}>WELCOMEEEE {this.state.message}</h1>
    <button style = {{backgroundColor:"red" }} onClick = {this.display_myru}>
      Click MEEEE</button>
      <Counter/>
    </div>
    )
  }

}

ReactDOM.render(<ParentComp/>,document.getElementById("root"))
  
