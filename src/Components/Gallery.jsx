import Card from './Card';
import data from "../backend.json";

export default function Gallery() {
    return (

        // Cards Container
        <div className='gallery'>
            <div className="cards">
                {data.map((card, key) => {
                    return (
                        <Card id={card.id} title={card.title} img={card.cover} key={key} />
                    )
                })}
            </div> 
        </div>
    )
}
