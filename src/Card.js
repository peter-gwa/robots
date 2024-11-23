import React from 'react';

const Card = ({id, name, username, email}) => {
    return (
        <div className='bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 tc w-20'>
            <img alt='robot' src={'https://robohash.org/'+ id}/>
            <div>
                <h3>{name}</h3>
                <p>{username}</p>
                <i>{email}</i>
            </div>
        </div>
    );
}

export default Card;