import { Link, useParams } from "react-router-dom";
import './../styles/pages/Productdetails.css'
function Productdetails(){
    const {productName} = useParams();
    
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
                    <div className="col-lg-7 prod-img">
                        <div className="row overflow-hidden">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_4_lar.jpg" alt="prod1" />
                            </div>
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_1_lar.jpg" alt="prod1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_5_lar.jpg" alt="prod1" />
                            </div>
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.caratlane.com/media/catalog/product/U/E/UE05496-1Y0000_3_lar.jpg" alt="prod1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productdetails;