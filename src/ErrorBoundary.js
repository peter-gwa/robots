import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }


    render(){
        if (this.state.hasError) {
            return <h1>Oooooops, robots are busy at the moment</h1>
        }
        return this.props.children;
    }


}

export default ErrorBoundary;