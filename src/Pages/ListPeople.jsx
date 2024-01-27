import PropTypes from "prop-types";
import data from "./data.json";
import People from "./People";
import { Link } from "react-router-dom";

const ListPeople = ({ type }) => {
  let displayData = [];

  if (type === "all") {
    displayData = data;
  } else {
    displayData = data.filter((p) => p.type === type);
  }

  return (
    <div className="flex-grid">
      {displayData.map((p) => (
        <Link
          to={`/${type === "student" ? "students" : "teachers"}/${p.id}`}
          key={p.id}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <People {...p} />
        </Link>
      ))}
    </div>
  );
};

ListPeople.propTypes = {
  type: PropTypes.string,
};

export default ListPeople;
