import Card from '../../Modules/Card';
import data from "../../backend.json";

export default function Gallery() {
    return (

        // Cards Container
        <div className='gallery'>
            <div className="cards">
                {data.map((card) => {
                    return (
                        <>
                            {/* map each card */}
                            <Card id={card.id} title={card.title} img={card.cover} />
                        </>
                    )
                })}
            </div> 
        </div>
    )
}
