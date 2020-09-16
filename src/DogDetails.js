import React from 'react';
import {Redirect, useParams} from 'react-router-dom';

const DogDetails = ({dogs})=>{
    const {name} = useParams()
    const findDog = (name)=>{
        return dogs.find(dog=>dog.name===name);
      }
    const dog = findDog(name)
    if(!dog) {
        return <Redirect to="/dogs"/>}
    return(
        
        <div className="DogDetails">
        <div key={dog.name}>
           <h2>{dog.name}</h2>
           <img src={`/img/${dog.src}.jpg`} alt={dog.name}></img>
           
            <h3>About {dog.name}</h3>
            <p>Age: {dog.age}</p>
           <ul>
               {dog.facts.map(fact=><li>{fact}</li>)}
            </ul>
        </div>
    </div>
    )
}
export default DogDetails