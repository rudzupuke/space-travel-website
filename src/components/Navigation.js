import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navigation = ({ setPage }) => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        if (!navOpen) {
            setNavOpen(true);
        } else {
            setNavOpen(false);
        }
    };

    const handleClick = (page) => {
        setPage(page);
        setNavOpen(false);
    };

    return (
        <>
            <a className="skip-to-content" href="#main">
                Skip to main content
            </a>
            <header className="primary-header flex">
                <div>
                    <img
                        src={require("../assets/shared/logo.svg").default}
                        alt="space tourism logo"
                        className="logo"
                    />
                </div>
                <button
                    className="mobile-nav-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded={navOpen}
                    onClick={toggleNav}
                >
                    <span className="sr-only">Menu</span>
                </button>
                <nav>
                    <ul
                        id="primary-navigation"
                        className={`${
                            "primary-navigation underline-indicators flex" +
                            (navOpen ? " nav-open" : "")
                        }`}
                    >
                        <CustomLink to="/" onClick={() => handleClick("home")}>
                            <span aria-hidden="true">00</span>Home
                        </CustomLink>

                        <CustomLink
                            to="/destination"
                            onClick={() => handleClick("destination")}
                        >
                            <span aria-hidden="true">01</span>Destination
                        </CustomLink>
                        <CustomLink
                            to="/crew"
                            onClick={() => handleClick("crew")}
                        >
                            <span aria-hidden="true">02</span>Crew
                        </CustomLink>
                        <CustomLink
                            to="/technology"
                            onClick={() => handleClick("technology")}
                        >
                            <span aria-hidden="true">03</span>Technology
                        </CustomLink>
                    </ul>
                </nav>
            </header>
        </>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link
                to={to}
                {...props}
                className="uppercase ff-sans-cond text-white letter-spacing-2"
            >
                {children}
            </Link>
        </li>
    );
};

export default Navigation;
