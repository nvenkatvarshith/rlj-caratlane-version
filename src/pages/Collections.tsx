import ProductCollection from '../components/ProductCollection';
import './../styles/pages/Collections.css'
import { Link, useParams } from 'react-router-dom';

function Collections(){
    const topFilters = ["All", "Fast Delivery", "Latest Designs", "Store pickup", "Try at Home"];
    const {collectionName} = useParams();
    const products = [
        {
            id:1,
            imgUrl: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05874-1YS300_11_listfront.jpg",
            price: "₹39,875",
            discount: "₹44,375",
            description: "Mesh Cluster Diamond Ring"
        },
        {
            id:2,
            imgUrl: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06350-1RS300_11_listfront.jpg",
            price: "₹18,693",
            discount: "₹21,437",
            description: "Infinity For Life Diamond Ring"
        },
        {
            id:3,
            imgUrl: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08761-RGS300_11_listfront.jpg",
            price: "₹31,142",
            discount: "₹34,801",
            description: "Heart Fusion Diamond Ring"
        },
        {
            id:4,
            imgUrl: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08757-1RP900_11_listfront.jpg",
            price: "₹38,902",
            discount: "₹43,170",
            description: "Tri Linear Diamond Ring"
        }
    ];

    

    return (
        <div>
            <div className='bg-light'>
                <div className="container py-3">
                    <h5>{collectionName 
                        ?(`${collectionName.charAt(0).toUpperCase()}${collectionName.substring(1, collectionName.length - 1)}`) 
                        : null}</h5>
                    <nav id="breadcrumb" aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item small"><Link to="/" className='text-decoration-none text-dark'>Home</Link></li>
                            <li className="breadcrumb-item active small" aria-current="page">Jewellery</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='mt-2 container'>
                {topFilters.map((filter) => {
                    return (
                        <button className='btn btn-lg btn-outline-secondary me-3' key={filter}>{filter}</button>
                    )
                })}
            </div>  

            <div className='row container-fluid mt-4'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-9'>
                    <div className='row'>
                        {products.map((product) => {
                            return (
                                <ProductCollection productCol = {product} key={product.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Collections;