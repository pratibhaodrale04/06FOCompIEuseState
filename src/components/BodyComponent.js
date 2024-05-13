import { restList } from "../utils/mockData";
import RestCardComponent from "./RestCardComponent ";

const BodyComponent = ()=>{
    return <div className="search-bar">
    <h1>SEARCH</h1>
    <div className="rest-container">
    {
        restList.map((restCards)=>(
            <RestCardComponent key={restCards.card.card.info.id} restData={restCards}/>
        ))
    }
    </div>
    </div>
};

export default BodyComponent;