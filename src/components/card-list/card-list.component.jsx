import {Component} from 'react';

import './card-list.styles.css'
import Card from '../card/card.component';



// const cardList = ({monsters})=>(
//    <div className='card-list'>
//    {monsters.map((monster)=>{
//       return <card monster={monster}></card>
//    }
//    )}
//    </div>
// )



class CardList extends Component{
    render(){
       const {monsters} = this.props;
        return  <div className='card-list'>
        {monsters.map(monster =>{
           return(
            <Card monster = {monster}></Card>
           )
            
            })}
         </div>;
        
    }
} 

export default CardList;