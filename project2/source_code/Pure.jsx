import React from "react"


function Pure({ salary ,id}) {
console.log("inside pure component")
    return (
        <div>
            <h1> Salary is : {salary}</h1>
        </div>

    )

}

export default React.memo(Pure)