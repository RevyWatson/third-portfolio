import React from "react";

function About() {
    return (
        <div className="container">
            <section className="row align-items-center p-3">
                <div className="col-lg-12">
                    <h3 className=" p-4">
                        About Alissa
                    </h3>
                </div>
                <div className="col-lg-4 col-12-sm p-4 float-start text-center">
                    <img src="./images/selfportrait.jpg" className="img-fluid p-1" id="portrait"></img>
                </div>
                <div className="col-lg-8 col-12-sm p-4">
                    <article>
                        For the last ten years I've been practicing as a lisenced massage therapist in the state of Michigan.
                        For half of that time I have been managing a self-employed business in a shared work enviroment. Far
                        before the pandemic I had been in search of a new career path. I have no doubt that my love for
                        tedious details, learning new things, and teaching others while
                        working with a team will serve me well in web developement.
                    </article>
                </div>
            </section>
        </div>
    )
}

export default About;