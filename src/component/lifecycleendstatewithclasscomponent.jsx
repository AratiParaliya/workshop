import { Component } from "react";

export default class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {Demo:"God is Great...!" };
    }
    componentWillMount(){
        alert("componentWillMount() called");
    }
    
    componentDidMount(){
        alert("componentDidMount() called");
    }

   changeState(){
    this.setState({Demo:"Time is money!"});
   
   }
    // render method should return JSX that describes the UI of the component
    render(){
        return(
            <div>
                <h1>{this.state.Demo}</h1>
                <a onClick = {this.changeState.bind(this)}>Click me to change text</a>
            </div>
        )

    }
        shouldComponentUpdate(nextProps,nextState)
         {
            alert("shouldComponentUpdate() called");
            return true; // Always return true to allow component update
        }
        componentWillUpdate(nextProps,nextState){
            alert("componentWillUpdate() called");
        }
        componentDidUpdate(prevProps,prevState){
            alert("componentDidUpdate() called");
        }
        componentWillUnmount(){
            alert("componentWillUnmount() called");
        }


    }

