import React,{Fragment} from "react";

const PeopleComment = ({comment})=>(
    <Fragment>
        <h4>{comment.text}</h4>
    </Fragment>
);

export default PeopleComment;