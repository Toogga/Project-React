import CardA from '../components/card/cardA.jsx'
import CardB from '../components/card/cardB.jsx'
import CardC from '../components/card/cardC.jsx'
import CardD from '../components/card/cardD.jsx'
import CardE from '../components/card/cardE.jsx'
import CardF from '../components/card/cardF.jsx'
import CardG from '../components/card/cardG.jsx'
import CardH from '../components/card/cardH.jsx'


export default function Card() {
    return (
        <div className='containerSalon'>
            <h1>Salon</h1>
            <div className='card-container2'>
                <CardA />
                <CardB />
                <CardC />
                <CardD />
                <CardE />
                <CardF />
                <CardG />
                <CardH />
            </div>
        </div>
    );
  }

