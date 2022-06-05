import Link from "next/link";
import React, { ReactElement } from "react";
import { useState } from "react";
import Top from "./assets/top.svg";
import Middle from "./assets/middle.svg";
import Bottom from "./assets/bottom.svg";

const Root = () => {
    const [displayData, setDisplayData] = useState<ReactElement[]>([]);
    const top = (<div id="top"><Top/></div>)
    const middle = (<div id="middle"><Middle/></div>)
    const bottom = (<div id="bottom"><Bottom/></div>)

    function topOreo(inv) {
        setDisplayData([...displayData, top])
        console.log(top);
    }

    function creamOrSomething(inv) {
        setDisplayData([...displayData, middle])
    }

    function bottomOreo(inv) {
        setDisplayData([...displayData, bottom])
    }

    function clearOreos() {
        setDisplayData([]);
    }

    return (
        <>
            <div className="top">
                <h1 id="title">Orerereo</h1>
                <h3>Create your favorite oreo combinations with this simple tool!</h3>
            </div>
            <div className="content">
                <div className="stacker">
                    {displayData.length == 0? (
                    <>
                    <p>Empty ;w;</p>
                    </>): (
                        <>
                            {displayData}
                        </>
                    )}
                </div>
                <div className="buttons">
                    <button onClick={topOreo}>O</button>
                    <button onClick={creamOrSomething}>re</button>
                    <button onClick={bottomOreo}>o</button>
                    <button onClick={clearOreos}>Clear All</button>
                </div>
            </div>
            <footer className="footer">
                <p id="about">Another useless website by StationaryStation</p>
                <Link passHref href="https://stationarystation.vercel.app/#/about">About StationaryStation</Link>
                <Link passHref href="https://stationarystation.vercel.app/#/proyects">More useless stuff</Link>
            </footer>
        </>
    );
}

export default Root;