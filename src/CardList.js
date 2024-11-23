import React from 'react';
import Card from './Card';
//import { robots } from './robots';



// class CardLiist extends Component {
//     render(){
//         return(
//             robots.map((user, i) => {
//                 return(
//                     <div>
//                         <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
//                     </div>
//                 )
//             })
//         )
//     }
// }

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NOOOOOOO!');
        
    // }
    const CardComponent = robots.map((user, i) => {
        return <Card id={robots[i].id} key={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
    })
    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default CardList;