import PropTypes from "prop-types";

const People = ({ name, section, image }) => {
  return (
    <div className="flex-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{section}</h4>
    </div>
  );
};

People.propTypes = {
  name: PropTypes.string,
  section: PropTypes.string,
  image: PropTypes.string,
};

export default People;
