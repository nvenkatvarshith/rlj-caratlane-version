function FeaturedCollection(){
    const collection = {
            imgUrl:'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/shaya_offer/04/Col_Desktop.jpg',
            products: [
                {
                    id : 1,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/E/BE01368-SSS300_11_listfront.jpg',
                    price: 6899,
                    discountPrice: 5519,
                    name: "Gratitude Gold Plated 925 Silver Diamond Earrings"   
                },
                {
                    id : 2,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/L/BL00832-SSS300_11_listfront.jpg',
                    price: 8800,
                    discountPrice: 7040,
                    name: "Kindred Gold Plated 925 Silver Diamond Necklace" 
                },
                {
                    id : 3,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/R/BR00573-SSS300_11_listfront.jpg',
                    price: 8399,
                    discountPrice: 6719,
                    name: "Transcend Gold Plated 925 Silver Diamond Ring" 
                },
                {
                    id : 4,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/L/BL00853-SSS300_11_listfront.jpg',
                    price: 17699,
                    discountPrice: 14159,
                    name: "Believe  925 Silver Diamond Necklace" 
                },
                {
                    id : 5,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/E/BE01381-SSS300_11_listfront.jpg',
                    price: 14299,
                    discountPrice: 11439,
                    name: "Flourish Gold Plated 925 Silver Diamond Stud Earrings" 
                }
            ]
        };
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