import {useParams} from "react-router-dom";
import React from "react";

let withRouter = (Children) => {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}
export default withRouter;