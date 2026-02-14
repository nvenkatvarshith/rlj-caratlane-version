import logo from './../assets/RLJ_Logo.png';

function Navbar() {
    const categories = [
            "Rings",
            "Earrings",
            "Bracelets & Bangles",
            "Solitaries",
            "Mangalsutras",
            "Necklaces & Pendants",
            "Silver by Shaya",
            "Gifting",
            "Collections",
            "More Jewellery",
            "Trending"
            ];

    const displaySubCategories = (category:string) => {
        console.log(category);
    };

    return (
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 ">
                <a className="navbar-brand" href="#"><img src={logo} alt="RLJ_Logo" width="60px" /></a>
                <ul className="navbar-nav mb-2 mb-lg-0 w-100 align-items-center d-none d-lg-flex column-gap-3">
                    <div className='w-50 text-end'>
                        <input type="search" className='w-75 py-2 px-1' name="search" id="search" placeholder='Search' />
                        <button className='btn'><i className="fa-solid fa-magnifying-glass fs-5"></i></button>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link border rounded-4" aria-current="page" href="#"><span><i className="fa-solid fa-gem me-2"></i>Treasure Chest</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link border rounded-4" aria-current="page" href="#"><span><i className="fa-solid fa-store me-2"></i>Stores</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link border rounded-4" aria-current="page" href="#"><span><i className="fa-solid fa-coins me-2"></i>eGold</span></a>
                    </li>

                    <li className='nav-item' style={{ fontSize: "13px" }}>
                        <span>Delivery & Stores</span> <br />
                        <span className='text-danger'>Enter Pincode</span>
                    </li>
                    <li className='nav-item'>
                        <i className="fa-solid fa-user me-4"></i>
                        <i className="fa-solid fa-heart me-4"></i>
                        <i className="fa-solid fa-cart-shopping me-4"></i>
                    </li>
                </ul>
            </nav>

            <nav className="navbar navbar-expand-lg bg-body-secondary ps-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {categories.map((category) => {
                                return (
                                    <li className="nav-item me-3" key={category} onMouseOver={() => displaySubCategories(category)}>
                                        <a className="nav-link" href="#">{category}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

            <div id='subcategory' className='w-100'>
                <h1>Featured</h1>
                <ul className='list-unstyled' id='featured'>
                    
                </ul>
                <h1>By Style</h1>
                <ul className='list-unstyled' id='featured'>
                    
                </ul>
                <h1>By Metal & Stone</h1>
                <ul className='list-unstyled' id='featured'>
                    
                </ul>
                <h1>By Price</h1>
                <ul className='list-unstyled' id='featured'>
                    
                </ul>
            </div>
        </div>
    );
}

export default Navbar;