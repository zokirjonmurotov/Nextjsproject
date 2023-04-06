import Image from "next/image";
import Button from "../button/button";

import classes from "./event-detail.module.css";

function EventDetail(props) {
  const { title, image, location, date, desc, id } = props;
  const humanReadibleDate = new Date(date).toLocaleDateString();
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image
          width={400}
          height={200}
          layout="responsive"
          src={"/" + image}
          alt={title}
        />
      </div>
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div>
          <div>
            <time>{humanReadibleDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventDetail;
