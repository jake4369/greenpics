const locations = [
  {
    _id: 0,
    name: "Sutton Park National Nature Reserve",
    username: "jdogg4369",
    county: "West Midlands",
    lng: "52.609024",
    lat: "-2.0840448",
    numReviews: 10,
    img: [
      "https://eu-assets.simpleview-europe.com/birmingham-visit/imageresizer/?image=%2Fdmsimgs%2FSutton_Park_85739525.jpg&action=ProductDetailProFullWidth",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: true,
    food: true,
    toilets: true,
    reviews: [],
  },
  {
    _id: 1,
    name: "Malvern Hills",
    username: "jdogg4369",
    county: "West Midlands",
    lng: "52.1674966",
    lat: "-2.7356114",
    numReviews: 4,
    img: [
      "https://www.visitthemalverns.org/wp-content/uploads/2021/06/British-Camp-1920-1200x899.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: true,
    food: false,
    toilets: true,
    reviews: [],
  },
  {
    _id: 2,
    name: "Lickey Hills Country Park",
    username: "jdogg4369",
    county: "West Midlands",
    lng: "52.3723358",
    lat: "-2.0093782",
    numReviews: 13,
    img: [
      "https://letsgowiththechildren.co.uk/wp-content/uploads/2016/12/Lickey-Hills-Country-Park-1-915px.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: false,
    disabledAccess: true,
    food: false,
    toilets: true,
    reviews: [],
  },
  {
    _id: 3,
    name: "Chiltern Hills",
    username: "jdogg4369",
    county: "Buckinghamshire",
    lng: "51.7250907",
    lat: "-0.8195256",
    numReviews: 37,
    img: [
      "https://cdn.britannica.com/08/144908-050-3F03692F/Chiltern-Hills-England.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: false,
    food: true,
    toilets: true,
    reviews: [],
  },
  {
    _id: 4,
    name: "Aysgarth Falls",
    username: "jdogg4369",
    county: "Yorkshire",
    lng: "54.2945501",
    lat: "-1.985987",
    numReviews: 84,
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Aysgarth_High_Force.JPG",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: true,
    food: true,
    toilets: false,
    reviews: [],
  },
  {
    _id: 5,
    name: "Malham Cove",
    username: "jdogg4369",
    county: "Yorkshire",
    lng: "54.0728293",
    lat: "-2.1605043",
    numReviews: 17,
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Malham_Cove.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: false,
    disabledAccess: true,
    food: false,
    toilets: false,
    reviews: [],
  },
  {
    _id: 6,
    name: "Jurassic Coast",
    username: "jdogg4369",
    county: "Devon",
    lng: "50.6161608",
    lat: "-3.9203241",
    numReviews: 130,
    img: [
      "https://lp-cms-production.imgix.net/2022-07/england-GettyImages-521766722-rfc.jpeg?auto=format&q=75&w=1920",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: false,
    disabledAccess: false,
    food: true,
    toilets: true,
    reviews: [],
  },
  {
    _id: 7,
    name: "St. Nectan's Glen",
    username: "jdogg4369",
    county: "Cornwall",
    lng: "50.6649851",
    lat: "-4.718956",
    numReviews: 110,
    img: [
      "https://www.st-nectansglen.co.uk/wp-content/uploads/2020/08/waterfall-one.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: false,
    food: false,
    toilets: false,
    reviews: [],
  },
  {
    _id: 8,
    name: "Coquet Valley",
    username: "jdogg4369",
    county: "Northumberland",
    lng: "55.3409312",
    lat: "-2.4102884",
    numReviews: 7,
    img: [
      "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Scenic%20Spots/Coquet%20Valley/coquet-valley-2023.jpg?ext=.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: false,
    disabledAccess: true,
    food: false,
    toilets: false,
    reviews: [],
  },
  {
    _id: 9,
    name: "Love Hambrook Marshes",
    username: "jdogg4369",
    county: "Kent",
    lng: "51.2754252",
    lat: "1.0592147",
    numReviews: 57,
    img: [
      "https://seekent.b-cdn.net/wp-content/uploads/2020/10/Canterbury-Hambrook-Marshes-CI.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit cumque autem excepturi est veritatis suscipit, enim id a expedita possimus, hic ab officia fuga accusantium labore perspiciatis culpa, qui esse rem ea eveniet quas modi praesentium! Quasi alias blanditiis obcaecati possimus. Nisi, dolorum veniam exercitationem placeat consectetur perspiciatis at.",
    parking: true,
    disabledAccess: true,
    food: true,
    toilets: true,
    reviews: [],
  },
];

export default locations;