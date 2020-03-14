import Link from "next/link";

const Header = () => (
  <div>
    <div>
      <img src="/urbania.svg" />
    </div>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/sublime">
            <a>Sublime</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      img {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Header;
