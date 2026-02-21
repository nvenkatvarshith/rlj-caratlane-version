import { useState } from "react";
import { Link } from "react-router-dom";

interface product{
    id:number;
    imgUrl: string;
    price: string;
    discount: string;
    description: string;
}

interface productProps{
    productCol: product;
}


function ProductCollection(props:productProps){
    const {productCol} = props;
    const [isDisplayOptions, setIsDisplayOptions] = useState(false);
    
    return (
        <div className="col-lg-3 col-sm-6">
            <Link className="text-decoration-none" to={`/jewellery/product/${productCol.description.split(" ").join("-")}`}>
                <div className={`card border-0 ${isDisplayOptions?'shadow-lg':''}`} style={{width: "100%", cursor: "pointer"}} onMouseEnter={() => setIsDisplayOptions(true)} onMouseLeave={() => setIsDisplayOptions(false)}>
                    <img src={productCol.imgUrl} className="card-img-top border" alt={productCol.description}/>
                    {/* <span className="position-absolute top-50"><i className="fa-solid fa-angle-left"></i><i className="fa-solid fa-angle-right"></i></span> */}
                    <div className="card-body small">
                        <h6 className="card-title m-0">{productCol.price} <span className="text-decoration-line-through ms-1 fw-normal">{productCol.discount}</span></h6>
                        <h6 className="card-title text-dark m-0">Check Delivery Date</h6>
                        <p className="card-text mb-1">{productCol.description}</p>
                        <div className={!isDisplayOptions?"d-none":"d-block"}>
                            <button className="btn btn-outline-secondary text-uppercase rounded-4 w-75">Try at Home</button>
                            <button className="btn btn-outline-secondary rounded-4 ms-2"><i className="fa-solid fa-video"></i></button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}   

export default ProductCollection;