import React from "react";
import Project from "../components/Project";

function Projects() {
    return (
        <div className="container">
            <section className="row p-3">
                <div className="col-lg-12">
                    <h3 className="p-3">
                        The Gallery
                    </h3>
                </div>
                <Project
                    name="The Bashful Diner"
                    image="../images/bashfuldiner.png"
                    link="http://www.thebashfuldiner.com/"
                    description="The Bashful Diner is an application that facilitates a simple and streamlined dining experience for both guests and restaurant staff."
                    github="https://github.com/RevyWatson/the-bashful-diner"
                />

                <Project
                    name="Note Taker"
                    image="../images/notetaker.png"
                    link="https://ancient-atoll-40268.herokuapp.com/"
                    description="Note Taker is an application that can be used to write and save notes."
                    github="https://github.com/RevyWatson/note-taker"
                />

                <Project
                    name="Tech Blog"
                    image="../images/techblog.png"
                    link="https://tranquil-shore-17488.herokuapp.com/"
                    description="CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well."
                    github="https://github.com/RevyWatson/tech-blog"
                />

                <Project
                    name="Wanderlost"
                    image="../images/wanderlost.png"
                    link="https://dracon75.github.io/Project-1/"
                    description="Michigan hiking trail locator that provides basic trail
info and current weather."
                    github="https://github.com/RevyWatson/wanderlost"
                />

                <Project
                    name="Work Day Scheduler"
                    image="../images/workdayscheduler.png"
                    link="https://revywatson.github.io/work-day-scheduler/"
                    description="Event planning application to help organize a user's work schedule for the current day. Linked to current local date and time."
                    github="https://github.com/RevyWatson/work-day-scheduler"
                />

                <Project
                    name="Password Generator"
                    image="../images/passwordgenerator.png"
                    link="https://revywatson.github.io/password_generator/"
                    description="Designed to generate a password that allows the user to specify
parameters such as length and types of characters."
                    github="https://github.com/RevyWatson/password_generator"
                />
            </section>
        </div >
    )
};

export default Projects;