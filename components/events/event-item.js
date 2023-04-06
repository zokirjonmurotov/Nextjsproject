import Button from "../button/button";
import Image from "next/image";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, location, date, id } = props;
  const humanReadibleDate = new Date(date).toLocaleDateString();
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          src={"/" + image}
          alt={title}
          className={classes.image2}
        />
      </div>
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <div>
            <time>{humanReadibleDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.btn}>
            <Button to={exploreLink}>Explore event</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
