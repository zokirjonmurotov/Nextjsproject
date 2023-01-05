import Link from "next/link";
import classes from "./button.module.css";
function Button(props) {
  return (
    <>
      <Link href={props.to}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    </>
  );
}
export default Button;
