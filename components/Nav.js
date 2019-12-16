import React from 'react'
import Link from 'next/link';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link></li>
            <li>
                <Link href="/map">
                    <a>Search a River</a>
                </Link></li>
            <li>

                <Link href="/login">
                    <a>Login</a>
                </Link>
            </li>
            {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #E5DFDF;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    </nav>
)

export default Nav;