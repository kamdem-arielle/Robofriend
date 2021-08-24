import React,{Component} from 'react';
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import './App.css';
import Scroll from '../components/Scroll'


class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:"",
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots :users}));
    }

     onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }
    

    render(){
        const {robots,searchfield} = this.state;
        const filteredrobots=robots.filter((robot)=>
        {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        });

        return !robots.length ?
        <h1>LOADING</h1>:
            (
                <div className='tc'>
                    <div className='nav tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox onSearchChange={this.onSearchChange}/>
                    </div>
                    
                    <Scroll>
                    <Cardlist robots={filteredrobots}/>
                    </Scroll>
                </div>
            );
}
}

export default App