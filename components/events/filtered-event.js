import React, { useRef } from "react";
import Button from "../button/button";
import { useRouter } from "next/router";
import classes from "./filtered-event.module.css";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEvent() {
  const router = useRouter();
  const month = useRef(null);
  const year = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    let path = `/events/${year.current.value}/${month.current.value}`;
    router.push(path);
  };
  return (
    <div className={classes.search}>
      <form className={classes.form} onSubmit={handleSumbit}>
        <select ref={month}>
          <option value="1">Yanvar</option>
          <option value="2">Fevral</option>
          <option value="3">Mart</option>
          <option value="4">Aprel</option>
          <option value="5">May</option>
          <option value="6">Iyun</option>
          <option value="7">Iyul</option>
          <option value="8">Avgust</option>
          <option value="9">Sentabr</option>
          <option value="10">Oktabr</option>
          <option value="11">Noyabr</option>
          <option value="12">Dekabr</option>
        </select>
        <select ref={year}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        <Button type="submit">click me</Button>
      </form>
    </div>
  );
}

export default FilteredEvent;
