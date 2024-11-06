import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/NavbarWithStyling";
import HoverButton from "./components/button/HoverButton";

function Navbar() {
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>About Me</li>
        <li>FAQ</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      <NavbarWithStyling
        menu={listMenu}
        name="Almagius"
        email="almagius@gmail.com"
      />
      <NavbarWithStyling
        menu={listMenu}
        name="Example"
        email="Example@gmail.com"
      />
      <NavbarWithStyling
        menu={["Tentang saya", "Tentang Tegar", "Tentang Rizal"]}
      />
      {/* <Navbar /> */}

      <HoverButton>
        <p>TEST CHILDREN</p>
      </HoverButton>
    </>
  );
}

export default App;
