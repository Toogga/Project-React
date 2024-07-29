import Card1 from './card/card1.jsx'
import Card2 from './card/card2.jsx'
import Card3 from './card/card3.jsx'
import Card4 from './card/card4.jsx'
import Card5 from './card/card5.jsx'
import Card6 from './card/card6.jsx'
import Card7 from './card/card7.jsx'
import Card8 from './card/card8.jsx'
import Card9 from './card/card9.jsx'
import Card10 from './card/card10.jsx'
import Card11 from './card/card11.jsx'
import Card12 from './card/card12.jsx'
import './card.css'

export default function Card() {
    return (
        <div className='containerCard'>
            <h1>Gameplay</h1>
            <div className='card-container'>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Card6 />
                <Card7 />
                <Card8 />
                <Card9 />
                <Card10 />
                <Card11 />
                <Card12 />
            </div>
        </div>
    );
  }

