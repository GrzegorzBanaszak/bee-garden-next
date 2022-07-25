import React from "react";
import styles from "../styles/AddApiary.module.css";
import { BiAddToQueue } from "react-icons/bi";
import styled from "styled-components";

const AddApiary = () => {
  return (
    <section className={styles.container}>
      <h2>
        <BiAddToQueue /> Dodaj nową pasiekę
      </h2>
      <div className={styles.form__container}>
        <div className={styles.form__group}>
          <label htmlFor="name">Nazwa pasieki</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="">Numer pasieki (opcjonalnie max 5 cyfr)</label>
          <input type="number" name="number" id="number" />
        </div>
      </div>
    </section>
  );
};

export default AddApiary;
