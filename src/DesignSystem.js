const DesignSystem = () => {
    return (
        <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
            {/* <div className="container">
                <h1>Design system</h1>
                <section id="colors"></section>

                <div
                    className="bg-accent text-dark"
                    style={{ padding: "1rem" }}
                >
                    light blue bg, with dark text
                </div>

                <div className="bg-white text-dark" style={{ padding: "1rem" }}>
                    white bg, with dark text
                </div>

                <div
                    className="example-component text-white"
                    style={{ padding: "1rem" }}
                >
                    light blue bg with a 20% alpha and white text
                </div>
            </div> */}
            <div className="container">
                <h1 className="uppercase">Design system</h1>

                <section id="colors" style={{ margin: "4rem 0" }}>
                    <h2 className="numbered-title">
                        <span>01</span> colors
                    </h2>
                    <div className="flex">
                        <div style={{ flexGrow: "1" }}>
                            <div
                                style={{
                                    padding: "3rem 1rem 1rem",
                                    border: "1px solid white",
                                }}
                                className="bg-dark text-white ff-serif fs-500"
                            >
                                #0B0D17
                            </div>
                            <p className="ff-serif">
                                <span className="text-accent">RGB</span> 11, 13,
                                23
                            </p>
                            <p className="ff-serif">
                                <span className="text-accent">HSL</span> 230°,
                                35%, 7%
                            </p>
                        </div>

                        <div style={{ flexGrow: "1" }}>
                            <div
                                style={{
                                    padding: "3rem 1rem 1rem",
                                    border: "1px solid white",
                                }}
                                className="bg-accent text-dark ff-serif fs-500"
                            >
                                #D0D6F9
                            </div>
                            <p className="ff-serif">
                                <span className="text-accent">RGB</span> 208,
                                214, 249
                            </p>
                            <p className="ff-serif">
                                <span className="text-accent">HSL</span> 231°,
                                77%, 90%
                            </p>
                        </div>

                        <div style={{ flexGrow: "1" }}>
                            <div
                                style={{
                                    padding: "3rem 1rem 1rem",
                                    border: "1px solid white",
                                }}
                                className="bg-white text-dark ff-serif fs-500"
                            >
                                #FFFFFF
                            </div>
                            <p className="ff-serif">
                                <span className="text-accent">RGB</span> 255,
                                255, 255
                            </p>
                            <p className="ff-serif">
                                <span className="text-accent">HSL</span> 0°, 0%,
                                100%
                            </p>
                        </div>
                    </div>
                </section>

                <section id="typography" style={{ margin: "4rem 0" }}>
                    <h2 className="numbered-title">
                        <span>02 </span>Typography
                    </h2>
                    <div className="flex">
                        <div
                            className="flow"
                            style={{
                                flexBasis: "100%",
                                "--flow-space": "4rem",
                            }}
                        >
                            <div>
                                <p className="text-accent">
                                    Heading 1 - Bellefair Regular - 150px
                                </p>
                                <p className="fs-900 uppercase ff-serif">
                                    Earth
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 2 - Bellefair Regular - 100px
                                </p>
                                <p className="fs-800 uppercase ff-serif">
                                    Venus
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 3 - Bellefair Regular - 56px
                                </p>
                                <p className="fs-700 uppercase ff-serif">
                                    Jupiter & Saturn
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 4 - Bellefair Regular - 32px
                                </p>
                                <p className="fs-600 uppercase ff-serif">
                                    Uranus, Neptune, & Pluto
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 5 - Barlow Condensed Regular - 28px
                                    - 4.75 Character Space
                                </p>
                                <p className="fs-500 uppercase ff-sans-cond letter-spacing-1 text-accent">
                                    So, you want to travel to space
                                </p>
                            </div>
                        </div>

                        <div
                            className="flow"
                            style={{
                                flexBasis: "100%",
                                "--flow-space": "4rem",
                            }}
                        >
                            <div>
                                <p className="text-accent">
                                    Subheading 1 - Bellefair Regular - 28px
                                </p>
                                <p className="fs-500 uppercase ff-serif">
                                    384,400 km
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Subheading 2 - Barlow Condensed Regular -
                                    14px - 2.35 Character Space
                                </p>
                                <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">
                                    Avg. Distance
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Nav Text - Barlow Condensed Regular - 16px -
                                    2.7 Character Space
                                </p>
                                <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                                    Europa
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">Body Text</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Phasellus hendrerit.
                                    Pellentesque aliquet nibh nec urna. In nisi
                                    neque, aliquet vel, dapibus id, mattis vel,
                                    nisi. Sed pretium, ligula sollicitudin
                                    laoreet viverra, tortor libero sodales leo,
                                    eget blandit nunc tortor eu nibh. Nullam
                                    mollis. Ut justo. Suspendisse potenti.Lorem
                                    ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Phasellus hendrerit.
                                    Pellentesque aliquet nibh nec urna. In nisi
                                    neque, aliquet vel, dapibus id, mattis vel,
                                    nisi. Sed pretium, ligula sollicitudin
                                    laoreet viverra, tortor libero sodales leo,
                                    eget blandit nunc tortor eu nibh. Nullam
                                    mollis. Ut justo. Suspendisse potenti.Lorem
                                    ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Phasellus hendrerit.
                                    Pellentesque aliquet nibh nec urna. In nisi
                                    neque, aliquet vel, dapibus id, mattis vel,
                                    nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flow" id="interactive-elements">
                    <h2 class="numbered-title">
                        <span>03</span> Interactive elements
                    </h2>

                    <div>
                        <nav>
                            <ul className="primary-navigation underline-indicators flex">
                                <li className="active">
                                    <a
                                        href="#"
                                        className="uppercase text-white letter-spacing-2"
                                    >
                                        <span>01</span>Active
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="uppercase text-white letter-spacing-2"
                                    >
                                        <span>02</span>Hovered
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="uppercase text-white letter-spacing-2"
                                    >
                                        <span>03</span>Idle
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex">
                        <div
                            style={{ marginTop: "5rem", marginBottom: "5rem" }}
                        >
                            <a
                                href="#"
                                className="large-button fs-600 text-dark bg-white uppercase ff-serif letter-spacing-2"
                            >
                                Explore
                            </a>{" "}
                        </div>

                        <div
                            className="flow"
                            style={{ "--flow-space": "4rem" }}
                        >
                            {/* <!-- Tabs --> */}
                            <div className="secondary-navigation underline-indicators flex">
                                <button
                                    aria-selected="true"
                                    className="uppercase letter-spacing-2 text-accent ff-sans-cond"
                                >
                                    Moon
                                </button>
                                <button
                                    aria-selected="false"
                                    className="uppercase letter-spacing-2 text-accent ff-sans-cond"
                                >
                                    Mars
                                </button>
                                <button
                                    aria-selected="false"
                                    className="uppercase letter-spacing-2 text-accent ff-sans-cond"
                                >
                                    Europa
                                </button>
                            </div>

                            {/* <!-- Dots --> */}
                            <div className="dot-indicators flex">
                                <button aria-selected="true">
                                    <span className="sr-only">Slide title</span>
                                </button>
                                <button aria-selected="false">
                                    <span className="sr-only">Slide title</span>
                                </button>
                                <button aria-selected="false">
                                    <span className="sr-only">Slide title</span>
                                </button>
                            </div>

                            {/* <!-- Numbers --> */}
                            <div className="numbers flow">
                                <button
                                    aria-selected="true"
                                    className="bg-dark text-white fs-600 ff-serif"
                                >
                                    1
                                </button>
                                <button
                                    aria-selected="false"
                                    className="bg-dark text-white fs-600 ff-serif"
                                >
                                    2
                                </button>
                                <button
                                    aria-selected="false"
                                    className="bg-dark text-white fs-600 ff-serif"
                                >
                                    3
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DesignSystem;
