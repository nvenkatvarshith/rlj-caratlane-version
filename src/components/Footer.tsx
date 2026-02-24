function Footer(){
    const footerData = [
        {
            title: "Know Your Jewellery",
            links: [
            "Diamond guide",
            "Jewellery guide",
            "Gemstones guide",
            "Gold rate",
            "Treasure chest",
            "Glossary"
            ]
        },
        {
            title: "CaratLane Advantage",
            links: [
            "15-day returns",
            "Free shipping",
            "Postcards",
            "Gold exchange",
            "Gift cards",
            "Digital gold"
            ]
        },
        {
            title: "Customer Service",
            links: [
            "Return policy",
            "Order status"
            ]
        },
        {
            title: "About Us",
            links: [
            "Our story",
            "Press",
            "Blog",
            "Careers"
            ]
        }
    ];
    const contact = {
            title: "Contact Us",
            company: "CaratLane Trading Pvt Ltd",
            address: [
            "6th Floor, Olympia Cyberspace",
            "Arulayammanpet, SIDCO Industrial Estate",
            "Guindy, Chennai",
            "Tamil Nadu 600032"
            ],
            support: {
            title: "24x7 Enquiry Support (All Days)",
            emails: [
                { type: "General", value: "contactus@caratlane.com" },
                { type: "Corporate", value: "b2b@caratlane.com" },
                { type: "HR", value: "careers@caratlane.com" }
            ],
            grievance: "click here"
            }
    };

    return (
        <div className="py-5 bg-secondary-subtle">
            <div className="container">
                <div className="row">
                    { footerData.map((footer) => {
                        return (
                        <div className="col-lg-2">
                            <h5>{footer.title}</h5>
                            <ul className="list-unstyled">
                                {footer.links?.map((link) => {
                                    return (
                                        <li className="mt-2">{link}</li>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                        )
                    }) }
                    <div className="col-lg-4">
                        <h5>{contact.title}</h5>
                        <div>
                            <h6>{contact.company}</h6>
                            {contact.address.map((add) => {
                                return (
                                    <p className="mb-1">{add}</p>
                                )
                            })}
                        </div>
                        <div className="mt-3">
                            <h5>{contact.support.title}</h5>
                            {contact.support.emails.map((contact) => {
                                return (
                                    <p className="mb-1">{contact.type} : <a href={contact.value} className="text-decoration-none text-dark">{contact.value}</a></p>
                                )
                            })}
                        </div>
                        <div className="row text-center w-75 mt-4">
                            <div className="col-lg-3">
                                <i className="fa-solid fa-phone fs-5"></i>
                                <p className="small mt-1">Call Us</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-solid fa-comments fs-5"></i>
                                <p className="small mt-1">Chat</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-brands fa-whatsapp fs-5"></i>
                                <p className="small mt-1">Whatsapp</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa-solid fa-envelope fs-5"></i>
                                <p className="small mt-1">Email</p>
                            </div>
                        </div>

                        <button className="btn btn-outline-secondary rounded-3 w-50 text-uppercase text-dark mt-3">Find a Store</button>
                    </div>
                </div>
                <div className="row align-items-center mt-2">
                    <div className="col-lg-6">
                        <h5>Find Us On</h5>
                        <div className="mt-3">
                            <span className="border rounded-circle bg-secondary p-2"><i className="fa-brands fa-instagram text-light fs-5"></i></span>
                            <span className="border rounded-circle bg-secondary p-2 ms-3"><i className="fa-brands fa-facebook text-light fs-5"></i></span>
                            <span className="border rounded-circle bg-secondary p-2 ms-3"><i className="fa-brands fa-linkedin text-light fs-5"></i></span>
                            <span className="border rounded-circle bg-secondary p-2 ms-3"><i className="fa-brands fa-pinterest text-light fs-5"></i></span>
                            <span className="border rounded-circle bg-secondary p-2 ms-3"><i className="fa-brands fa-x text-light fs-5"></i></span>

                        </div>
                    </div>
                    <div className="col-lg-6 text-center pt-4">
                            <i className="fa-brands fa-cc-visa fs-1"></i>
                            <i className="fa-brands fa-cc-mastercard fs-1 ms-2"></i>
                            <i className="fa-brands fa-cc-paypal fs-1 ms-2"></i>
                            <i className="fa-brands fa-cc-amex fs-1 ms-2"></i>
                            <i className="fa-brands fa-amazon fs-1 ms-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;