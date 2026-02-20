import BannerSlider from './../components/BannerSlider'
import FeaturedCollection from './../components/FeaturedCollection'
import CollectionGrid from './../components/CollectionGrid'
import CollectionList from './../components/CollectionList'
import CollectionListBig from './../components/CollectionListBig'

interface product{
    id: number;
    prodImgUrl: string;
    price: number;
    discountPrice: number;
    name: string
}
interface featuredCollection{
    imgUrl: string;
    products: product[]
}


function Homepage(){

    const BannerSliderImgUrl = [
        'https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/Banner/Digigold/Diggold_desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/Banner/VT_Offer/04/Desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/blog/02/Desktop_1760x630.jpg'
    ];

    const featuredCollection: featuredCollection= {
            imgUrl:'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/shaya_offer/04/Col_Desktop.jpg',
            products: [
                {
                    id : 1,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/E/BE01368-SSS300_11_listfront.jpg',
                    price: 6899,
                    discountPrice: 5519,
                    name: "Gratitude Gold Plated 925 Silver Diamond Earrings"   
                },
                {
                    id : 2,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/L/BL00832-SSS300_11_listfront.jpg',
                    price: 8800,
                    discountPrice: 7040,
                    name: "Kindred Gold Plated 925 Silver Diamond Necklace" 
                },
                {
                    id : 3,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/R/BR00573-SSS300_11_listfront.jpg',
                    price: 8399,
                    discountPrice: 6719,
                    name: "Transcend Gold Plated 925 Silver Diamond Ring" 
                },
                {
                    id : 4,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/L/BL00853-SSS300_11_listfront.jpg',
                    price: 17699,
                    discountPrice: 14159,
                    name: "Believe  925 Silver Diamond Necklace" 
                },
                {
                    id : 5,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/B/E/BE01381-SSS300_11_listfront.jpg',
                    price: 14299,
                    discountPrice: 11439,
                    name: "Flourish Gold Plated 925 Silver Diamond Stud Earrings" 
                }
            ]
    };

    const collectionGridImgUrl = [
        'https://cdn.caratlane.com/media/static/images/V4/2026/Shaya/02-Feb/Responsive/12/Responsive_03.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/9KT_Offer/04/UB_Desktop.jpg',
        'https://cdn.caratlane.com/media/static/images/V4/2026/01-JAN/Banner/50_offer/01/UB_Desktop.jpg'
    ];

    const collectionList = [
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/couple_d.jpg",
            name: "Couple Rings"
        },
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/rosegold_d.jpg",
            name: "Rose Gold Earrings for Her"
        },
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/heart_d.jpg",
            name: "Heart Pendants"
        },
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/sub15k_d.jpg",
            name: "Valentine's Gifts under 15K"
        },
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/evileye_d.jpg",
            name: "Evil Eye Designs"
        },
        {
            imgUrl:"https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/6-tiles/Chains_d.jpg",
            name: "Gold Chains for Him"
        }
    ];
    
    const collectionsBigURL = [
        "https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/collections/aneka_d.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/collections/polki_d.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/collections/adaa_d.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/others/collections/disney_d.jpg"
    ];

    const featuredCollection2: featuredCollection= {
            imgUrl:'https://cdn.caratlane.com/media/static/images/V4/2026/02_Feb/Banner/22KT/01/Col_Desktop.jpg',
            products: [
                {
                    id : 1,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/U/KU01629-2Y0000_11_listfront.jpg',
                    price: 72958,
                    discountPrice: 71751,
                    name: "Radhika Fancy Box 22KT Gold Chain"   
                },
                {
                    id : 2,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/U/KU01769-2Y0000_11_listfront.jpg',
                    price: 94087,
                    discountPrice: 92531,
                    name: "Delighted Reverse Box 22Kt Unisex Gold Chain" 
                },
                {
                    id : 3,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/U/KU01733-2Y0000_11_listfront.jpg',
                    price: 105284,
                    discountPrice: 103542,
                    name: "Twilled 22Kt Gold Unisex Chain" 
                },
                {
                    id : 4,
                    prodImgUrl: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/U/KU01773-2Y0000_11_listfront.jpg',
                    price: 82710,
                    discountPrice: 81342,
                    name: "Adorning Twist 22Kt Unisex Gold Chain" 
                }
            ]
    };

    return (
        <div>
            <BannerSlider bannerImgUrl = {BannerSliderImgUrl} />
            <FeaturedCollection featuredCollection = {featuredCollection} />
            <CollectionGrid collectionGridImgUrl = {collectionGridImgUrl} />
            <CollectionList collectionListImg={collectionList}/>
            <CollectionListBig collectionBigURL = {collectionsBigURL}/>
            <FeaturedCollection featuredCollection = {featuredCollection2} />

        </div>
    )
}

export default Homepage;