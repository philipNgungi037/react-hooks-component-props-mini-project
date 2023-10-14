import React from "react";

function About ({props}){

    return(
        <aside>
           <img src={props.image} alt="blog logo" placeholder="https://via.placeholder.com/215"/>
           <p>{props.about}</p>
        </aside>
    )

}
export default About;