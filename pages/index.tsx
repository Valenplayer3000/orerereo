import Link from "next/link";
import React, { ReactElement } from "react";
import { useState } from "react";
import Top from "./assets/top.svg";
import Middle from "./assets/middle.svg";
import Bottom from "./assets/bottom.svg";

const Root = () => {
    const [displayData, setDisplayData] = useState<ReactElement[]>([]);
    const [seed, setSeed] = useState<String | null>("");
    const [toggle, setToggle] = useState<Number>(0);
    // const [displaySeed, setDisplaySeed] = useState<String>("");

    const top = (<div id="top"><Top /></div>)
    const middle = (<div id="middle"><Middle /></div>)
    const bottom = (<div id="bottom"><Bottom /></div>)

    function topOreo(inv) {
        setDisplayData([...displayData, top])
        setSeed(seed + " " + "O");
    }

    function creamOrSomething(inv) {
        setSeed(seed + " " + "re");
        setDisplayData([...displayData, middle])
    }

    function bottomOreo(inv) {
        setSeed(seed + " " + "o");
        setDisplayData([...displayData, bottom])
    }

    function clearOreos() {
        setDisplayData([]);
        setSeed("");
    }

    // function toggleSeedInput(state: Number, hook: Function) {
    //     if (state == 1) {
    //         hook(0);
    //         console.log(state);
    //     } else if (state == 0) {
    //         hook(1);
    //         console.log(state);
    //     }
    // } 

    // function formChangeHook(e: any) {

    // }

    // function formSubmitHook(e: any) {
    //     e.preventDefault();
    //     let seedArr = seed.split(" ");
    //     console.log(seedArr);
    //     seedArr.forEach((e) => {
    //         if(e === "O") {
    //             setTimeout(() => {
    //                 setDisplayData([...displayData, top]);
    //             }, 2);
    //         } else if (e === "re") {
    //             setTimeout(() => {
    //                 setDisplayData([...displayData, middle]);
    //             }, 2)
    //         } else if (e === "o") {
    //             setTimeout(() => {
    //                 setDisplayData([...displayData, bottom]);
    //             }, 2);
    //         }
    //     })
    // }

    return (
        <>
            <div className="top">
                <h1 id="title">Orerereo</h1>
                <h3>Create your favorite oreo combinations with this simple tool!</h3>
            </div>
            <div className="content">
                <p id="seed">Seed: {seed}</p>
                <div className="buttons">
                    <button onClick={topOreo}>O</button>
                    <button onClick={creamOrSomething}>re</button>
                    <button onClick={bottomOreo}>o</button>
                    <button id="danger" onClick={clearOreos}>Clear All</button>
                </div>
                <div className="stacker">
                    {displayData.length == 0 ? (
                        <>
                            <p id="empty">Empty ;w;</p>
                        </>) : (
                        <>
                            {displayData}
                        </>
                    )}
                </div>


                {/* {toggle == 1? (<form onSubmit={formSubmitHook}>
                    <input
                        type="text"
                        onChange={formChangeHook}
                        placeholder="Insert Seed Here..."
                    />
                </form>): (<></>)} */}
            </div>
            <footer className="footer">
                <div>
                    <p id="about">Another useless website by StationaryStation</p>
                    <Link id="link" passHref href="https://stationarystation.vercel.app/#/about">About StationaryStation</Link>
                    <Link id="link" passHref href="https://stationarystation.vercel.app/#/projects">More useless stuff</Link>
                    {/* <button id="textbtn" onClick={() => toggleSeedInput(toggle, setToggle)}>Seed Input</button> */}
                </div>
            </footer>
        </>
    );
}

export default Root;