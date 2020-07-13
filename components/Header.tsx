import Link from "next/link";
import Head from "next/head";
import { COLORS } from "../constants";

const Header = () => (
  <div>
    <Head>
      <title>URBANIA</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
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
          <Link href="/linear-chic">
            <a>Linear Chic</a>
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

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
      }

      li {
        flex-grow: 1;
        margin-bottom: 1rem;
        list-style: none;
      }

      li a {
        text-align: center;
        color: #fff;
        text-decoration: none;
        display: block;
        padding: 8px 20px;
      }
      li:nth-child(7n-6) a {
        background-color: ${COLORS.GREEN};
      }

      li:nth-child(7n-5) a {
        background-color: ${COLORS.ORANGE};
      }

      li:nth-child(7n-4) a {
        background-color: ${COLORS.GREEN};
      }

      li:nth-child(7n-3) a {
        background-color: ${COLORS.GRAY};
      }

      li:nth-child(7n-2) a {
        background-color: ${COLORS.ORANGE};
      }

      li:nth-child(7n-1) a {
        background-color: ${COLORS.GRAY};
      }

      li:nth-child(7n) a {
        background-color: ${COLORS.GREEN};
      }

      li a:hover {
        background-color: #333;
      }
    `}</style>
  </div>
);

export default Header;
