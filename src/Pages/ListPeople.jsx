import PropTypes from "prop-types";
import data from "./data.json";
import People from "./People";

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
        <People key={p.id} {...p} />
      ))}
    </div>
  );
};

ListPeople.propTypes = {
  type: PropTypes.string,
};

export default ListPeople;
