import React from 'react';
import Card from './Card.js'

const CardList = ({ robots }) => {
    const CardArray = robots.map((robot, i) => {
        return <Card key={i} id={robot.id} name={robot.name} username={robot.username} email={robot.email}></Card>
    });

    return (
        <div>
            {CardArray}
        </div>
    );
}

export default CardList;
