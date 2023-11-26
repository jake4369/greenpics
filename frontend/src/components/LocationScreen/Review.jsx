import { useSelector } from "react-redux";
import { useDeleteReviewMutation } from "../../slices/locationsSlice";

import { FaTrash } from "react-icons/fa";

const Review = ({ location, review, refetch }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const [deleteReview, { isLoading: isDeleting, isError: errorDeleting }] =
    useDeleteReviewMutation();

  const handleDeleteReview = async () => {
    const data = {
      locationId: location._id,
      reviewId: review._id,
    };
    try {
      await deleteReview(data).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="review-container">
      <img
        className="profile-image--review"
        src={userInfo.profileImage}
        alt=""
      />
      <h1 className="user">{review.username}</h1>

      <p className="review">{review.comment}</p>

      <p>{review.createdAt.split("T")[0]}</p>

      {userInfo._id === review.user && (
        <button className="delete-review-btn" onClick={handleDeleteReview}>
          <FaTrash />
        </button>
      )}
    </div>
  );
};

export default Review;
