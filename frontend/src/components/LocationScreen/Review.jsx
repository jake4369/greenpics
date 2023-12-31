import { useSelector } from "react-redux";
import { useDeleteReviewMutation } from "../../slices/locationsSlice";
import { useGetUserByIdQuery } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";

import { FaTrash } from "react-icons/fa";

const Review = ({ location, review, refetch }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const authorId = review.user;
  const { data: author, isLoading, isError } = useGetUserByIdQuery(authorId);

  const [deleteReview, { isLoading: isDeleting, isError: errorDeleting }] =
    useDeleteReviewMutation();

  const handleDeleteReview = async () => {
    const data = {
      locationId: location?._id,
      reviewId: review?._id,
    };
    try {
      await deleteReview(data).unwrap();
      refetch();
      toast.success("Review deleted");
    } catch (error) {
      toast.error(error?.data.message || error.message);
    }
  };

  return (
    <div className="review">
      <div className="review__data">
        <img
          className="review__profile-img"
          src={author?.profileImage}
          alt=""
        />
        <div>
          <p className="review__user">{review.username}</p>
          <p className="review__createdAt">{review.createdAt.split("T")[0]}</p>
        </div>
      </div>
      <p className="review__comment">{review.comment}</p>

      {userInfo?._id === review.user && (
        <button className="delete-review-btn" onClick={handleDeleteReview}>
          <FaTrash /> Delete review
        </button>
      )}
    </div>
  );
};

export default Review;
