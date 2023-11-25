import {
  FaWheelchair,
  FaParking,
  FaToilet,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

const PublicInfo = ({ location }) => {
  return (
    <ul className="public-info">
      <li>
        <FaWheelchair className="public-info__icon" /> Disabled Access{" "}
        <span>
          {location.disabledAccess ? (
            <FaCheck className="public-info__check-icon" />
          ) : (
            <FaTimes className="public-info__times-icon" />
          )}
        </span>
      </li>
      <li>
        <FaParking className="public-info__icon" /> Parking{" "}
        <span>
          {location.parking ? (
            <FaCheck className="public-info__check-icon" />
          ) : (
            <FaTimes className="public-info__times-icon" />
          )}
        </span>
      </li>
      <li>
        {" "}
        <FaToilet className="public-info__icon" /> Toilets{" "}
        <span>
          {location.toilets ? (
            <FaCheck className="public-info__check-icon" />
          ) : (
            <FaTimes className="public-info__times-icon" />
          )}
        </span>
      </li>
      <li>
        {" "}
        <MdFoodBank className="public-info__icon" />
        Food & Drinks{" "}
        <span>
          {location.food ? (
            <FaCheck className="public-info__check-icon" />
          ) : (
            <FaTimes className="public-info__times-icon" />
          )}
        </span>
      </li>
    </ul>
  );
};

export default PublicInfo;
