import { useState } from "react";
import { useAddLocationMutation } from "./../../slices/locationsSlice";

import Map from "../Shared/Map";

const AddLocation = () => {
  const [name, setName] = useState("");
  const [county, setCounty] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [parking, setParking] = useState(false);
  const [disabledAccess, setDisabledAccess] = useState(false);
  const [food, setFood] = useState(false);
  const [toilets, setToilets] = useState(false);
  const [lng, setLng] = useState(-4.7913);
  const [lat, setLat] = useState(54.3222);

  const [addLocation, { isLoading, isError }] = useAddLocationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      county,
      img,
      description,
      parking,
      disabledAccess,
      food,
      toilets,
      lng,
      lat,
      reviews: [],
    };

    try {
      const response = await addLocation(data);

      setName("");
      setCounty("");
      setImg("");
      setDescription("");
      setParking(false);
      setDisabledAccess(false);
      setFood(false);
      setToilets(false);
      setLng(-4.7913);
      setLat(54.3222);
    } catch (error) {
      console.error("Error adding location:", error);
    }
  };

  return (
    <div className="addlocation">
      <h1>Add A Location</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Location</label>
          <input
            type="text"
            placeholder="Name of location"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>County</label>
          <input
            type="text"
            placeholder="Name of county"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />

          <label>Upload Image</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />

          <label>Description</label>
          <textarea
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <ul>
            <li>
              <label>
                Parking
                <input
                  type="checkbox"
                  value={parking}
                  onChange={(e) => setParking((checked) => !checked)}
                  checked={parking}
                />
              </label>{" "}
            </li>
            <li>
              <label>
                Disabled Access{" "}
                <input
                  type="checkbox"
                  value={disabledAccess}
                  onChange={(e) => setDisabledAccess((checked) => !checked)}
                  checked={disabledAccess}
                />
              </label>
            </li>
            <li>
              <label>
                Food and Drink{" "}
                <input
                  type="checkbox"
                  value={food}
                  onChange={(e) => setFood((checked) => !checked)}
                  checked={food}
                />
              </label>
            </li>
            <li>
              <label>
                Toilets{" "}
                <input
                  type="checkbox"
                  value={toilets}
                  onChange={(e) => setToilets((checked) => !checked)}
                  checked={toilets}
                />
              </label>
            </li>
          </ul>

          <div className="addlocation__map-container">
            {/* <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} /> */}
          </div>

          <button className="submit-btn" disabled={isLoading}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
