import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'

const App =  ()=>{

  const [searchField, setSearchField]  = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredmonsters,setFilteredMonsters] = useState(monsters);
  

 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredmonsters = monsters.filter((monster)=>
      {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredmonsters);
   
  }, [monsters,searchField]);


 // console.log(searchField);

  const onSearchChange = (event) =>{
    const searchFeildString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFeildString);

  }

 


  return(
         <div className="App">

        <h1 className='app-title'>Monster Rololex</h1>

        <SearchBox onChangeHandler={onSearchChange} className={'monster-search-box'} placeholder={'search Monster'} ></SearchBox>

        <CardList  monsters={filteredmonsters} />
        </div>
  )
}


// class App extends Component
// {

//   constructor (){
//     super();
//     this.state={
//       monster :[],
//       searchFeild:''
//       }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users)=>
//     this.setState(
//       () => {
//         return{monster:users};
//       }
      
//     ))
    
//   }
//   onSearchChange = (event)=> {console.log(event.target.value);
      
      
//     this.setState(()=>{
//       const searchFeild = event.target.value.toLocaleLowerCase();
//       return {searchFeild};
//     })
//     };
 
//   render(){

//     const {monster,searchFeild} = this.state;
//     const {onSearchChange}=this;
//     const filteredmonsters = monster.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchFeild)
//       });

//     return (
//       <div className="App">

//       <h1 className='app-title'>Monster Rololex</h1>
      
//        {/* {
//         filteredmonsters.map((monster)=>{
//           return <div key={monster.id}>
//           <h1>{monster.name}</h1>
//           <h1>{monster.email}</h1>
//           </div>
//         }
        
//         )
//        } */}

//        <SearchBox onChangeHandler={onSearchChange} className={'monster-search-box'} placeholder={'search Monster'} ></SearchBox>
//       <CardList  monsters={filteredmonsters} />
//       </div>
//     );
//   }
// }
export default App;
