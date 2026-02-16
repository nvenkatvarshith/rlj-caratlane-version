function CollectionGrid(){
    const collectionImg = [
        'https://cdn.caratlane.com/media/static/images/V4/2026/Shaya/02-Feb/Responsive/12/Responsive_03.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/9KT_Offer/04/UB_Desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/50_offer/01/UB_Desktop.jpg'
    ];
    return (
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-lg-6 mb-2">
                    <img src={collectionImg[0]} alt="big-collection" className="w-100 rounded-3 img-fluid"/>
                </div>
                <div className="col-lg-6">
                    <div className="row mb-3">
                        <div className="col-lg-12">
                            <img src={collectionImg[1]} alt="collection-1" className="w-100 rounded-3 img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <img src={collectionImg[2]} alt="collection-2" className="w-100 rounded-3 img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionGrid;