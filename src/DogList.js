import React from 'react';

const DogList = ({dogs}) =>{
return (
    <div className="DogList">
        {dogs.map(dog => (
        <div key={dog.name}>
           <h2>{dog.name}</h2>
           <img style={{width: "100px"}}src={`/img/${dog.src}.jpg`} alt={dog.name}></img>
           <p>Age: {dog.age}</p>
        </div>
        ))}
    </div>
)

}
export default DogList