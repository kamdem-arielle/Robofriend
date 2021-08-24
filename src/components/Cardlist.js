import React from 'react';
import Card from './Card' ;
import './Cardlist.css'

const Cardlist=({robots})=>{
    return( 
    <div style={{marginTop:'25vh'}}>
    {robots.map((user,i)=>{
        return <Card id={user.id} name={user.name} email={user.email} />
    })}
    </div>
    );
}
export default Cardlist;