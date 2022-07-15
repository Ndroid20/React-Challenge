import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Anthony's Store</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
