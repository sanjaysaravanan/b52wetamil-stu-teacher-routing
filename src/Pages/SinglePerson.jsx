import { useParams } from "react-router-dom";
import data from "./data.json";
import People from "./People";

const SinglePerson = () => {
  const { id } = useParams(); // gives the value type as string

  const person = data.find((p) => p.id === Number(id));

  console.log(person);

  return <People {...person} />;
};

export default SinglePerson;
