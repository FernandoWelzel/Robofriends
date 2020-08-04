import React from 'react';

const Card = ({ id, name, username, email }) => {
    return (
      <div className='bg-light-green dib br3 pa3 ma2 bwd2 grow shadow-5 tc'>
          <img alt='Robot' src={`https://robohash.org/${username}?200x200`}/>
          <div>
              <h2>{name}</h2>
              <h3>{email}</h3>
          </div>
      </div>
    );
}

export default Card;
