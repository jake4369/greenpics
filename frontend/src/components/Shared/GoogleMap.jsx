// import React, { useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const MapComponent = ({ lat, setLat, lng, setLng, customZoom }) => {
//   const [clickedLatLng, setClickedLatLng] = useState(null);

//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   const handleMapClick = (e) => {
//     const clickedLat = e.latLng.lat();
//     const clickedLng = e.latLng.lng();

//     // Log the clicked latitude and longitude
//     console.log(
//       `Clicked Latitude: ${clickedLat}, Clicked Longitude: ${clickedLng}`
//     );

//     // Update state to store clicked coordinates for display or further use
//     setClickedLatLng({ lat: clickedLat, lng: clickedLng });

//     // Optional: If you want to update the lat and lng in parent component state
//     // setLat(clickedLat);
//     // setLng(clickedLng);
//   };

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyCOxbvzw57YxZF5w4tT7Ebar9PkYuqMSf8",
//     libraries: ["geometry", "drawing"],
//   });

//   return (
//     <>
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={{
//             lat: parseFloat(lat),
//             lng: parseFloat(lng),
//           }}
//           zoom={customZoom}
//           onClick={handleMapClick}
//         >
//           {/* Render marker at clicked position if needed */}
//           {clickedLatLng && (
//             <Marker
//               position={{ lat: clickedLatLng.lat, lng: clickedLatLng.lng }}
//             />
//           )}
//         </GoogleMap>
//       )}
//     </>
//   );
// };

// export default MapComponent;

import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["geometry", "drawing"]; // Define libraries outside the component

const MapComponent = ({ lat, setLat, lng, setLng, customZoom }) => {
  const [clickedLatLng, setClickedLatLng] = useState(null);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const handleMapClick = (e) => {
    const clickedLat = e.latLng.lat();
    const clickedLng = e.latLng.lng();

    // Log the clicked latitude and longitude
    console.log(
      `Clicked Latitude: ${clickedLat}, Clicked Longitude: ${clickedLng}`
    );

    // Update state to store clicked coordinates for display or further use
    setClickedLatLng({ lat: clickedLat, lng: clickedLng });

    // Optional: If you want to update the lat and lng in parent component state
    // setLat(clickedLat);
    // setLng(clickedLng);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCOxbvzw57YxZF5w4tT7Ebar9PkYuqMSf8",
    libraries: libraries, // Use the libraries constant here
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={{
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          }}
          zoom={customZoom}
          onClick={handleMapClick}
        >
          {/* Render marker at clicked position if needed */}
          {clickedLatLng && (
            <Marker
              position={{ lat: clickedLatLng.lat, lng: clickedLatLng.lng }}
            />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default MapComponent;
