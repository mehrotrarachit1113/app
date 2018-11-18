import React , {Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)

        this.state = {term : ''}
    }
    render(){
        return(
            <div>
                <h1>React App</h1>
                <p>Hello Webpack</p>
            </div>   
        )
    }
}

export default App