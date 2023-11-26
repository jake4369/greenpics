import { useState } from "react";
import { Link } from "react-router-dom";

import { useCreateReviewMutation } from "./../../slices/locationsSlice";
import { useSelector } from "react-redux";

const ReviewForm = ({ location, refetch }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [checkedValues, setCheckedValues] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [
    createReview,
    { isLoading: loadingLocationReview, error: reviewError },
  ] = useCreateReviewMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const locationId = location._id;

    const data = {
      locationId,
      rating,
      comment,
    };
    try {
      await createReview(data).unwrap();
      refetch();
      setRating(0);
      setComment("");
      setCheckedValues({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedValues({ ...checkedValues, [name]: checked });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      {userInfo ? (
        <>
          <label>Leave a review for {location.name}?</label>
          <input
            type="text"
            placeholder="Leave a review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <label>How would you rate {location.name}?</label>
          <ul className="review-form__checkboxes">
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <li key={value}>
                {value}{" "}
                <input
                  type="checkbox"
                  name={value.toString()}
                  value={value}
                  checked={checkedValues[value]}
                  onChange={handleCheckboxChange}
                />
              </li>
            ))}
          </ul>

          <button
            className="submit-review-btn"
            disabled={loadingLocationReview}
          >
            Submit
          </button>
        </>
      ) : (
        <p>
          <Link to="/login">Sign In</Link> to leave a review
        </p>
      )}
    </form>
  );
};

export default ReviewForm;
