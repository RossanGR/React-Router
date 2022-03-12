import React from 'react'
import {useParams} from 'react-router-dom';

const  Card = () => {
    // Serve para pegar o que vem na url (:user)
    const params = useParams();

  return (
    <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
        <h3 className='ui header'>Card about {params.user}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex impedit cumque sequi provident. Error consequatur modi, praesentium, itaque delectus accusantium accusamus tempore in atque eos assumenda fugiat animi, id impedit.</p>
    </div>
  );
}

export default Card;
