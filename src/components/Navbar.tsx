import { Link } from 'react-router-dom';
import logo from './../assets/RLJ_Logo.png';
import { useState } from 'react';

function Navbar() {
    const categories:string[] = [
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

    interface MenuColumn {
        category: string;
        items: string[];
    }

    interface Promotion {
        title: string;
        imageUrl: string;
    }

    interface CategoryData {
        links: MenuColumn[];
        promotions: Promotion[];
    }

    interface NavigationData {
        rings: CategoryData;
        earrings: CategoryData;
    };

    const navigationData:NavigationData = {
        rings: {
            links: [
                {
                    category: "Featured",
                    items: ["Latest Designs", "Bestsellers", "Fast Delivery", "Special Deals"]
                },
                {
                    category: "By Style",
                    items: [
                        "All Rings", "Engagement", "Dailywear", "Infinity",
                        "Cocktail", "Solitaire", "Couple Rings", "Bands",
                        "Promise Rings", "Silver By Shaya"
                    ]
                },
                {
                    category: "By Metal & Stone",
                    items: [
                        "Diamond", "Pearl", "Navratna", "Gemstone", "Platinum",
                        "Gold", "Rose Gold", "Yellow Gold", "White Gold", "22KT Gold"
                    ]
                },
                {
                    category: "By Price",
                    items: [
                        "Under ₹ 10k", "₹ 10k - ₹ 20k", "₹ 20k - ₹ 30k",
                        "₹ 30k - ₹ 50k", "₹ 40k - ₹ 50k", "₹ 50k - ₹ 75k", "₹ 75k & Above"
                    ]
                }
            ],
            promotions: [
                { title: "Message Bands", imageUrl: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_MB.jpg" },
                { title: "Postcards", imageUrl: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_PC.jpg" }
            ]
        },
        earrings: {
            links: [
                {
                    category: "Featured",
                    items: ["Latest Designs", "Bestsellers", "Fast Delivery", "Special Deals"]
                },
                {
                    category: "By Style",
                    items: [
                        "All Earrings", "Studs", "Hoops", "Drops", "Earcuffs",
                        "Sui Dhagas", "Jhumkas", "Chandbalis", "Silver Earrings"
                    ]
                },
                {
                    category: "By Metal & Stone",
                    items: [
                        "Diamond", "Pearl", "Navratna", "Gemstone", "Platinum",
                        "Rose Gold", "Yellow Gold", "White Gold", "22kt Gold"
                    ]
                },
                {
                    category: "By Price",
                    items: [
                        "Under ₹ 10k", "₹ 10k - ₹ 20k", "₹ 20k - ₹ 30k",
                        "₹ 30k - ₹ 50k", "₹ 50k - ₹ 75k", "₹ 75k & Above"
                    ]
                }
            ],
            promotions: [
                { title: "Switch", imageUrl: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_Switch.jpg" },
                { title: "Dancing Hoops", imageUrl: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_DH.jpg" }
            ]
        }
    };

    let [currentMenuData, setCurrentMenuDate] = useState<CategoryData>(navigationData["rings"]);
    let [currentCategory, setCurrentCategory] = useState("rings");

    const displaySubCategories = (category: string) => {
        document.getElementById("subcategory")?.classList.remove("d-none");
        const subcategoryElement = document.getElementById("subcategory");
            if (subcategoryElement) {
                subcategoryElement.classList.remove("d-none");
            }

            const data = navigationData[category.toLowerCase() as keyof typeof navigationData];
            if (data) {
                setCurrentMenuDate(data);
                setCurrentCategory(category);
            }
    };

    const displaySubCategory = () => {
        document.getElementById("subcategory")?.classList.remove("d-none");
    };

    const disableSubCategory = () => {
        document.getElementById("subcategory")?.classList.add("d-none");
    };

    return (
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 ">
                <Link className="navbar-brand" to=""><img src={logo} alt="RLJ_Logo" width="60px" /></Link>
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
            <div className='main-nav position-relative'>
                <nav className="navbar navbar-expand-lg bg-body-secondary ps-3" onMouseLeave={disableSubCategory}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {categories.map((category) => {
                                    return (
                                        <li className="nav-item me-3" key={category} onMouseOver={() => displaySubCategories(category)}>
                                            <Link className="nav-link" to={"/jewellery/"+category.toLowerCase()}>{category}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='w-100 pt-3 d-none position-absolute z-3 bg-light pb-4' id='subcategory' onMouseOver={displaySubCategory} onMouseOut={disableSubCategory}>
                    <div className='w-100 d-flex column-gap-5 justify-content-center'>
                        {
                            currentMenuData["links"].map((subcategory) => {
                                return (
                                    <div key={subcategory.category}>
                                        <h6>{subcategory.category}</h6>
                                        <ul className='list-unstyled mt-3' id='featured'>
                                            {
                                                subcategory.items.map((item) => {
                                                    return (
                                                        <li key={item} className='mb-2'><Link to={`/jewellery/${item}-${currentCategory.toLowerCase()}`} className='text-decoration-none text-dark'>{item}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        {
                            currentMenuData["promotions"].map((promotion) => {
                                return (
                                    <div className="card" key={promotion.title} style={{ width: "15rem" }}>
                                        <img src={promotion.imageUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{promotion.title }</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;