interface BannerProps{
    bannerImgUrl: string[];
}

function BannerSlider(props:BannerProps){
    const {bannerImgUrl} = props;
    return (
        <div className="container-fluid mt-3">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-5">
                {
                    bannerImgUrl.map((banner) => {
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