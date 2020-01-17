import React,{Fragment} from "react";

//components
import PeopleComment from "./PeopleComment";

const PeopleCommentsList = ({comments}) =>{

    return(
        <Fragment>
            <div id="ctr-people_comments_list">
                {
                    comments.map((comment,index)=>(
                        
                        <PeopleComment key={`comment_${index}`} comment={comment}/>
                        
                    ))
                }
            </div>
        </Fragment>
    );

};

export default PeopleCommentsList;