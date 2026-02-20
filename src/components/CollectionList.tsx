interface CollectionDetails{
    imgUrl: string;
    name: string;
}

interface collectionListProps{
    collectionListImg: CollectionDetails[]
}

function CollectionList(props:collectionListProps){
    const {collectionListImg:collectionList} = props
    return (
        <div className="container-fluid p-3 rounded-3 bg-secondary-subtle">
                <div className="row pt-3 pe-2">
                    <div className="col-lg-2 pt-4 ps-5 text-center">
                        <img src="https://assets.cltstatic.com/images/responsive/hp/hp-asset1.png" alt="gift" width="130px"/>
                        <h5>Wrapped with love</h5>
                    </div>
                    <div className="col-lg-10">
                        <div className="row text-center">
                        {
                            collectionList.map((collection) => {
                                return (
                                    <div className="col-lg-2">
                                        <img src={collection.imgUrl} alt={collection.name} className="rounded-3 w-100"/>
                                        <div className="content mt-2">
                                            <h6 className="text-uppercase">{collection.name}</h6>
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

export default CollectionList;