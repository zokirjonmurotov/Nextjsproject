import Link from "next/link";
import classes from "./button.module.css";
function Button(props) {
  if (props.to) {
    return (
      <>
        <Link href={props.to}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      </>
    );
  }
  return (
    <button type={props?.type} onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
}
export default Button;
