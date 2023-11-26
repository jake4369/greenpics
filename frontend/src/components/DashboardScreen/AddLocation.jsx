import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  useAddLocationMutation,
  useUploadLocationImageMutation,
} from "./../../slices/locationsSlice";

import GoogleMap from "./../../Components/Shared/GoogleMap";
import Loader from "./../Shared/Loader";
import Message from "../Shared/Message";

const AddLocation = () => {
  const [name, setName] = useState("");
  const [county, setCounty] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [parking, setParking] = useState(false);
  const [disabledAccess, setDisabledAccess] = useState(false);
  const [food, setFood] = useState(false);
  const [toilets, setToilets] = useState(false);
  const [lng, setLng] = useState(-1.6642621);
  const [lat, setLat] = useState(53.3958079);

  const [addLocation, { isLoading: isSubmitting, isError }] =
    useAddLocationMutation();

  const [uploadLocationImage, { isLoading: loadingUpload }] =
    useUploadLocationImageMutation();

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
      setLng(-1.6642621);
      setLat(53.3958079);
      toast.success("Successfully added");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadLocationImage(formData).unwrap();
      setImg(res.image);
      e.target.value = ""; // Clear the file input after successful upload
      toast.success("Successfully uploaded image");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="addlocation">
      <h1>Add A Location</h1>

      {isSubmitting ? (
        <Loader />
      ) : isError ? (
        <Message>An error occurred. Please refresh the browser.</Message>
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
          <input type="file" onChange={handleFileUpload} />
          <input
            type="text"
            placeholder="Or enter image url"
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

          {/* <div className="addlocation__map-container">
            <GoogleMap
              lng={lng}
              setLng={setLng}
              lat={lat}
              setLat={setLat}
              customZoom={6}
            />
            <small>Zoom in and click location to add map marker</small>
          </div> */}

          <button className="submit-btn" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
