import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header
        style={{
          position: "fixed",
          height: "75px",
          backgroundColor: "red",
          top: 0,
          width: "100vw",
        }}
      ></header>
      <aside
        style={{
          position: "fixed",
          height: "calc(100vh - 75px)",
          backgroundColor: "blue",
          top: "75px",
          width: "200px",
          color: "white",
          textAlign: "center",
        }}
        className="content-container"
      >
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/students">Students</Link>
        <br />
        <Link to="/teachers">Teachers</Link>
      </aside>
      <div style={{ marginTop: "75px", marginLeft: "200px", padding: 16 }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
