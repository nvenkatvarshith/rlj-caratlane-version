function BannerSlider(){
    const BannerImgUrl = [
        'https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/Banner/Digigold/Diggold_desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/Banner/VT_Offer/04/Desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/blog/02/Desktop_1760x630.jpg'
    ]
    return (
        <div className="container-fluid mt-3">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-5">
                {
                    BannerImgUrl.map((banner) => {
                        return (
                            <div className="carousel-item active" key={banner} data-bs-interval="1000"> 
                                <img src={banner} className="d-block w-100" alt="..."/>
                            </div>
                        )
                    })
                }
                
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default BannerSlider;