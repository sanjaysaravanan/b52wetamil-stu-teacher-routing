import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ListPeople from "./Pages/ListPeople";
import SinglePerson from "./Pages/SinglePerson";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ListPeople type={"all"} />} />
        <Route path="/students" element={<ListPeople type={"student"} />} />
        <Route path="/teachers" element={<ListPeople type={"teacher"} />} />
        <Route path="/students/:id" element={<SinglePerson />} />
        <Route path="/teachers/:id" element={<SinglePerson />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
