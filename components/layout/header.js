import classes from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={classes.header}>
      <main>
        <Link href="/">
          <a>
            <h2>Main Events</h2>
          </a>
        </Link>
      </main>
      <Link href="/events">
        <a>
          <h2>Browse All events</h2>
        </a>
      </Link>
    </header>
  );
}
export default Header;
