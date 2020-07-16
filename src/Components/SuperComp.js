// This is similar to the java concept of super classes where we group common methods and properties and place it in a super class

import React, { Component } from 'react'

const superComp = (SomeComponent) => {


    
   class NewComp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment = () =>{
        this.setState(prevState =>{ return {count: prevState.count + 1 }})
    }

        render() {
            return (
                <div>
                    <SomeComponent count = {this.state.count} increment = {this.increment}></SomeComponent>
                </div>
            )
        }

   }

   return NewComp

}

export default superComp;




String[] words = inputData.split(" ");
ArrayList<boolean> word = Arrays.asList(words);  
ArrayList<String> list = new ArrayList<String>();

Collections.sort(word);

int largest =0;

for(int i = 0; i< word.size() ; i++){
    for(int j = 1; j< word.size() ; j++){
        if(word.get(i).contains(word.get(j))){
            if(word.get(i) >= largest){
            largest = word.get(i).length()
            list.add(word.get(i))
            }
        }
    }
}




String[] words = inputData.split("\n");

String[] S = words[0].split("=")[1]
String[] T = words[1].split("=")[1]









