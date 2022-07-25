import { useState } from "react";
import styles from "../styles/Home.module.css";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import AddApiary from "../components/addApiary";

export default function Home() {
  const [displayAddApiary, setDisplayAddApiary] = useState(false);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Bee garden</h2>
        {displayAddApiary ? (
          <AiOutlineCloseCircle
            onClick={() => setDisplayAddApiary((prev) => !prev)}
          />
        ) : (
          <AiOutlinePlusCircle
            onClick={() => setDisplayAddApiary((prev) => !prev)}
          />
        )}
      </header>
      {displayAddApiary && <AddApiary />}
    </div>
  );
}
