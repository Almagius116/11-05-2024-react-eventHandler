import styles from "./NavbarWithStyling.module.css";
import About from "../about/About";
import HoverButton from "../button/HoverButton";
import { useState } from "react";

const NavbarWithStyling = ({ menu, name, email }) => {
  // const [list, setList]
  let list;
  let biodata = {};
  const [biodata2, setBiodata2] = useState({});

  if (menu) {
    list = (
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="">{menu[0]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{menu[1]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{menu[2]}</a>
        </li>
      </ul>
    );
  } else {
    list = <h1>List not exist</h1>;
  }

  function handleTriggerSelect(selectedStudent) {
    console.log("ke trigger " + selectedStudent);
    setBiodata2({
      ...biodata,
      name,
      email,
    });

    biodata = {
      ...biodata,
      name,
      email,
    };
  }

  console.log(biodata);
  console.log("COMPONENT RENDER ?");

  return (
    <>
      {/* ini component modal */}
      <div className={styles.overlay} onClick={""}>
        <div className={styles.modal}>
          {/* <button className={styles.closeButton} onClick={""}>
            &times;
          </button> */}
          <div className={styles.content}>
            Biodata : {biodata2.name} {biodata2.email}{" "}
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <h1 className={styles.title}>FSW 2</h1>
        {list}
      </div>
      <About name={name} email={email} />
      <HoverButton onSelect={() => handleTriggerSelect(name)}>
        Click Me!
      </HoverButton>
    </>
  );
};

export default NavbarWithStyling;
