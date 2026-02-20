import './../styles/CollectionListBig.css'

interface CollectionListBigProps{
    collectionBigURL: string[];
}

function CollectionListBig(props: CollectionListBigProps){
    const {collectionBigURL:collectionsURL} = props;

    return (
        <div className="container-fluid text-center my-3 bg-secondary-subtle">
            <h2>RLJ Collections</h2>
            <div className="row mt-3 flex-nowrap overflow-x-scroll">
                {collectionsURL.map((collection) => {
                    return (
                        <div className="col-lg-4 overflow-hidden">
                            <img src={collection} alt={collection} className="w-100 rounded-3 collectionBig"/>
                        </div>
                    )
                })}
            </div>
            <button className="btn btn-secondary px-5 mt-3 py-2 text-uppercase fw-semibold">View all collections</button>
        </div>
    )
}

export default CollectionListBig;