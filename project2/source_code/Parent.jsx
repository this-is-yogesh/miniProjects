import React from "react";
import Pure from "./Pure";

export default function Parent({ id, salary }) {
console.log("inside parent ")
    return (
        <div>
            <h1> Id is : {id}</h1>
            <Pure salary={salary} id={id} />
        </div>

    )
}