interface product{
    id: number;
    prodImgUrl: string;
    price: number;
    discountPrice: number;
    name: string
}

interface featuredCollection{
    imgUrl: string;
    products: product[]
}

interface featuredProps{
    featuredCollection: featuredCollection;
}

function FeaturedCollection(props:featuredProps){
    const {featuredCollection: collection} = props;
    return (
        <div className="container-fluid my-3 ">
            <div className="row">
                <div className="col-lg-6 pe-0">
                    <img src={collection.imgUrl} alt="Featured Collection" className="w-100 rounded-start-3" />
                </div>
                <div className="col-lg-6 pt-3 bg-dark">
                    <div className="row flex-nowrap overflow-x-hidden column-gap-2">                            
                    {
                        collection.products.map((product) => {
                            return (
                                <div className="col-lg-3" key={product.id}>
                                    <div className="card border-0" key={product.id} style={{width: "11rem"}}>
                                        <img src={product.prodImgUrl} className="card-img-top border-1 rounded-4" alt="..."/>
                                        <div className="card-body small text-light bg-dark">
                                            <h6>{`₹${product.discountPrice}`} <span className="text-decoration-line-through text-secondary">₹{product.price}</span></h6>
                                            <p className="card-title text-truncate">{product.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mt-1 ms-2">
                            <span className="bg-light me-4 p-1 rounded-circle"><i className="fa-solid fa-left-long"></i></span>
                            <span className="bg-light p-1 rounded-circle"><i className="fa-solid fa-right-long"></i></span>
                        </div>
                        <div>
                            <button className="btn btn-light px-5 py-2 fw-bold">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCollection;