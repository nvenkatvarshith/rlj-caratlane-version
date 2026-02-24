import { Link, useParams } from "react-router-dom";
import './../styles/pages/Productdetails.css'
function Productdetails(){
    const {productName} = useParams();
    const getData = {
            "data": {
                "getViewedProducts": {
                    "skus": [
                        {
                            "sku": "ue05496-1y0000"
                        },
                        {
                            "sku": "ue06522-1y0000"
                        }
                    ],
                    "getProducts": {
                        "products": [
                            {
                                "sku": "UE05496-1Y0000",
                                "name": "Ashvi Classic Kids' Gold Earrings",
                                "vendor": "GL_FG",
                                "erp_sku": "UE05496-1Y0000-NA",
                                "size": "0",
                                "mto_shipping_days": 11,
                                "id": 222334,
                                "price": 14101,
                                "formatted_price": "₹14,101",
                                "specialPrice": 13719,
                                "formatted_special_price": "₹13,719",
                                "customize": {
                                    "availability": true,
                                    "sections": [
                                        {
                                            "id": "size",
                                            "selected": "",
                                            "enabled": false,
                                            "heading": "Select Size",
                                            "options": []
                                        },
                                        {
                                            "id": "metal",
                                            "selected": "14 KT_Yellow",
                                            "enabled": true,
                                            "heading": "Metal",
                                            "options": [
                                                {
                                                    "id": "14 KT_Rose",
                                                    "title_1": "14 KT",
                                                    "title_2": "Rose Gold",
                                                    "color_code": "rose",
                                                    "title_1_conv": null
                                                },
                                                {
                                                    "id": "14 KT_Yellow",
                                                    "title_1": "14 KT",
                                                    "title_2": "Yellow Gold",
                                                    "color_code": "yellow",
                                                    "title_1_conv": null
                                                },
                                                {
                                                    "id": "18 KT_White",
                                                    "title_1": "18 KT",
                                                    "title_2": "White Gold",
                                                    "color_code": "white",
                                                    "title_1_conv": null
                                                },
                                                {
                                                    "id": "18 KT_Yellow",
                                                    "title_1": "18 KT",
                                                    "title_2": "Yellow Gold",
                                                    "color_code": "yellow",
                                                    "title_1_conv": null
                                                }
                                            ]
                                        },
                                        {
                                            "id": "diamond",
                                            "selected": "",
                                            "enabled": false,
                                            "heading": "Diamond",
                                            "options": []
                                        }
                                    ],
                                    "next_options": {
                                        "14 KT_Rose": {
                                            "sku": "UE05496-1R0000",
                                            "size": "0",
                                            "qty": 31
                                        },
                                        "14 KT_Yellow": {
                                            "sku": "UE05496-1Y0000",
                                            "size": "0",
                                            "qty": 169
                                        },
                                        "18 KT_White": {
                                            "sku": "UE05496-WG0000",
                                            "size": "0",
                                            "qty": 0
                                        },
                                        "18 KT_Yellow": {
                                            "sku": "UE05496-YG0000",
                                            "size": "0",
                                            "qty": 1
                                        }
                                    },
                                    "next_options_app": {
                                        "0_14 KT_Rose": {
                                            "sku": "UE05496-1R0000",
                                            "size": "0",
                                            "qty": 31
                                        },
                                        "0_14 KT_Yellow": {
                                            "sku": "UE05496-1Y0000",
                                            "size": "0",
                                            "qty": 169
                                        },
                                        "0_18 KT_White": {
                                            "sku": "UE05496-WG0000",
                                            "size": "0",
                                            "qty": 0
                                        },
                                        "0_18 KT_Yellow": {
                                            "sku": "UE05496-YG0000",
                                            "size": "0",
                                            "qty": 1
                                        }
                                    }
                                },
                                "image": [
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_1_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_3_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_4_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_5_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_6_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_7_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_8_lar.jpg"
                                    },
                                    {
                                        "type": "listfront",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE05496-1Y0000_11_listfront.jpg"
                                    },
                                    {
                                        "type": "listhover",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE05496-1Y0000_12_listhover.jpg"
                                    },
                                    {
                                        "type": "pdtouch",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE05496-1Y0000_13_pdtouch.png"
                                    },
                                    {
                                        "type": "video",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_16_video.mp4"
                                    }
                                ],
                                "jewellery_category": "Unstudded",
                                "product_type": "Earrings",
                                "metal": "14 KT Yellow",
                                "material": [
                                    "Gold"
                                ],
                                "url": "/jewellery/ashvi-classic-kids-gold-earrings-ue05496-1y0000.html"
                            },
                            {
                                "sku": "UE06522-1Y0000",
                                "name": "Enticing Gold Hoop Earrings",
                                "vendor": "GL_FG",
                                "erp_sku": "UE06522-1Y0000-NA",
                                "size": "0",
                                "mto_shipping_days": 11,
                                "id": 242884,
                                "price": 11073,
                                "formatted_price": "₹11,073",
                                "specialPrice": 10712,
                                "formatted_special_price": "₹10,712",
                                "customize": {
                                    "availability": false,
                                    "sections": [
                                        {
                                            "id": "size",
                                            "selected": "",
                                            "enabled": false,
                                            "heading": "Select Size",
                                            "options": []
                                        },
                                        {
                                            "id": "metal",
                                            "selected": "14 KT_Yellow",
                                            "enabled": true,
                                            "heading": "Metal",
                                            "options": [
                                                {
                                                    "id": "14 KT_Yellow",
                                                    "title_1": "14 KT",
                                                    "title_2": "Yellow Gold",
                                                    "color_code": "yellow",
                                                    "title_1_conv": null
                                                }
                                            ]
                                        },
                                        {
                                            "id": "diamond",
                                            "selected": "",
                                            "enabled": false,
                                            "heading": "Diamond",
                                            "options": []
                                        }
                                    ],
                                    "next_options": {
                                        "14 KT_Yellow": {
                                            "sku": "UE06522-1Y0000",
                                            "size": "0",
                                            "qty": 0
                                        }
                                    },
                                    "next_options_app": {
                                        "0_14 KT_Yellow": {
                                            "sku": "UE06522-1Y0000",
                                            "size": "0",
                                            "qty": 0
                                        }
                                    }
                                },
                                "image": [
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_1_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_3_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_4_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_5_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_6_lar.jpg"
                                    },
                                    {
                                        "type": "",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_7_lar.jpg"
                                    },
                                    {
                                        "type": "listfront",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE06522-1Y0000_11_listfront.jpg"
                                    },
                                    {
                                        "type": "listhover",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE06522-1Y0000_12_listhover.jpg"
                                    },
                                    {
                                        "type": "pdtouch",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE06522-1Y0000_13_pdtouch.png"
                                    },
                                    {
                                        "type": "video",
                                        "url": "https://cdn.caratlane.com/media/catalog/product/U/E/UE06522-1Y0000_16_video.mp4"
                                    }
                                ],
                                "jewellery_category": "Unstudded",
                                "product_type": "Earrings",
                                "metal": "14 KT Yellow",
                                "material": [
                                    "Gold"
                                ],
                                "url": "/jewellery/enticing-gold-hoop-earrings-ue06522-1y0000.html"
                            }
                        ]
                    },
                    "status": {
                        "code": true,
                        "message": "Products has been retrieved successfully"
                    }
                }
            }
        };
    const product = getData.data.getViewedProducts.getProducts.products[0];
    
    return (
        <div>
            <div className="container-fluid">
                <nav id="breadcrumb" aria-label="breadcrumb" className="m-2">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item small"><Link to="/" className='text-decoration-none text-dark'>Home</Link></li>
                        <li className="breadcrumb-item active small" aria-current="page">Jewellery</li>
                        <li className="breadcrumb-item active small" aria-current="page">{productName?.split("-").join(" ")}</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-8 prod-img">
                        <div className="row">
                        {product.image.map((img) => {
                            if(img.type !== "video"){
                                return (
                                    <div className="col-lg-6">
                                        <img src={img.url} alt={img.url} width="100%" />
                                    </div>
                                )
                            }
                        })}
                        </div>
                    </div>
                    <div className="col-lg-4 ps-3">
                        <button className="btn btn-sm btn-outline-secondary">4.9 <i className="fa-solid fa-star"></i> | 214 Ratings </button>
                        <h5 className="mb-0 mt-2">{product.formatted_special_price}<span className="text-decoration-line-through ms-2 text-secondary">{product.formatted_price}</span><span className="text-danger fw-light">(3%off)</span></h5>
                        <span className="small">(MRP Inclusive of all taxes)</span>
                        <h5 className="text-secondary mt-2">{product.name}</h5>
                        <button className="btn btn-outline-warning mt-3 d-flex justify-content-between w-100 align-items-center">
                            <span className="w-75 border-end">Metal <br />14 KT_Yellow</span>
                            <span className="text-uppercase w-25">customize</span>
                        </button>
                        <div className="w-100 d-flex gap-3 mt-3">
                            <button className="btn btn-secondary w-75 py-2 text-uppercase">Buy Now</button>
                            <button className="btn btn-secondary text-uppercase"><i className="fa-solid fa-heart"></i></button>
                            <button className="btn btn-secondary text-uppercase"><i className="fa-solid fa-share-nodes"></i></button>
                        </div>
                        <h5 className="mt-3">Delivery, Stores & Trial</h5>
                        <div className="position-relative d-flex align-items-center">
                            <i className="fa-solid fa-location-crosshairs position-absolute p-2"></i>
                            <button className="btn btn-outline-secondary w-100 text-center">500013</button>
                            <span className="text-uppercase position-absolute end-0 bottom-1 p-2">Change</span>
                        </div>
                        <div className="border border-secondary rounded-3 mt-3 py-2">
                            <span className="fw-bold"><i className="fa-solid fa-box-archive mx-2"></i>Free Deliveryby 1st Mar</span>
                        </div>
                        <div className="border border-secondary rounded-3 mt-3 p-2">
                            <h5 className="fw-bold"><i className="fa-solid fa-store mx-2"></i>Nearest Store - Himayatnagar (4km)</h5>
                            <span className="bg-success rounded-5 text-light p-1 small ms-4">DESIGN AVAILABLE</span> <br />
                            <span className="small ms-4">Also Available in 12 other stores</span>
                            <button className="btn btn-secondary text-light w-100 rounded-3 my-1">find in store</button>
                        </div>
                        <div className="border border-secondary rounded-3 mt-3 p-2">
                            <h6><i className="fa-regular fa-house"></i><span className="ms-2">Try at Home(It's Free)</span></h6>
                            <span className="mt-1 small">Home Appointment Available to try from Today!</span>
                            <button className="text-uppercase w-100 rounded-4 btn btn-secondary my-1">Book Home Appointment</button>
                        </div>  
                        <div className="row text-center align-items-center mt-3 w-100" id="icon-description">
                            <div className="col-lg-3">
                                <i className="fa-solid fa-award"></i>
                                <h6>100% Certified</h6>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h6>15 Day Money-Back</h6>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-solid fa-wallet"></i>
                                <h6>Lifetime Exchange</h6>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-solid fa-calendar"></i>
                                <h6>One Year Warranty</h6>
                            </div>
                        </div>
                        <div className="border rounded-3 p-3">
                            <span>Earn 100 xCLusive points with this order <br />1 xCLusive point = ₹1</span>
                        </div>
                        <div className="w-100 text-center mt-2">
                            Learn more on about our <a href="#" className="text-decoration-none text-dark">TERMS & POLICIES</a>
                        </div>
                        <div className="mt-4" id="product-details">
                            <h4>Product Details</h4>
                            <h6>SKU {product.sku}</h6>
                            <p>Introducing the Ashvi Classic Kids' Gold Earrings! These stunning earrings are a must-have for any young fashionista. The circular balis are set in 14 KT yellow gold, adding a touch of elegance and sophistication to any outfit. The classic design is timeless and will never go out of style. With their comfortable and secure fit, your child will be able to wear them all day with ease. Whether it's a birthday party, a school dance, or just a day out with friends, these earrings will make your child feel like a true princess.</p>
                            <div className="row border rounded-3 py-2" id="materials">
                                <div className="col-lg-6 border-end">
                                    <h6 className="text-uppercase">{product.material[0]}</h6>
                                    <span className="me-2">{product.metal}</span><br />
                                    <span>
                                        1.060 g (Net wt)
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <h6>Dimensions</h6>
                                    1.4 (Width) <br />
                                    9.7 mm (Height) <br />
                                    1.060 g (Gross wt) <br />
                                    0 (Length)
                                </div>
                            </div>
                            <p className="py-2 border-top border-bottom mt-4">Manufactured by CaratLane Trading Pvt Ltd</p>
                            <div className="row mt-3 small text-center align-items-center">
                                <div className="col-lg-4 small">
                                    <img src="https://cdn.caratlane.com/media/static/images/web/BIS_-_Bureau_of_Indian_Standards-1.png" alt="bis" />
                                    <h6 className="mb-0 mt-2">BIS*</h6>
                                    <span>Hallmarked Jewellery</span>
                                </div>
                                <div className="col-lg-4 small">
                                    <img src="https://cdn.caratlane.com/media/static/images/web/Tata-Certified-1.png" alt="TATA" />
                                    <h6 className="mb-0 mt-3">Trust of TATA</h6>
                                    <span>Spirit of CaratLane</span>
                                </div>  
                                <div className="col-lg-4 small">
                                    <img src="https://cdn.caratlane.com/media/static/images/web/Certificate-2.png" alt="certifiec" />
                                    <h6 className="mb-0 mt-2">100% Certified</h6>
                                    <span>by CaratLane</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productdetails;