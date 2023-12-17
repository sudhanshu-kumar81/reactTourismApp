import { useState } from "react";
const  Card=({id, image, info, price, name, removeTour})=> {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore)
    }
    
    return (
        <div className="card">
            <div>
                <img src={image} className="image" alt="" ></img>
            </div>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className=" tour-name">{name}</h4>

                </div>
                <div className="description">{description}
                    <span classNmae="read-more" onClick={readmoreHandler}>{readmore ? 'show less': `show more`}</span>
                </div>

            </div>
            <button className="btn-red" onClick={()=> removeTour(id)}>not Interested</button>
        </div>
    )
}
export default Card;