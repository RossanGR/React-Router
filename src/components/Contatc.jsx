import React from 'react'
import {Link} from 'react-router-dom';
function Contact(props) {
  return (
    <div>
      <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
        <Link className='ui header' to='/alex'>Alex</Link >
       
    </div>
    <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
        <Link className='ui header' to='/tommy'>Tomy</Link>
       
    </div>
    </div>
  );
}

export default Contact;
