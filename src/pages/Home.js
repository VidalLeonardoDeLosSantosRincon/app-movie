import React,{Component, Fragment} from "react";

//assets
import "../assets/css/pages/Home.css";

//components
import PeopleCommentsList from "../components/PeopleCommentsList";
import LoginView from "../components/presentational/Login";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[
                {text:"Hola 1"},
                {text:"Hola 2"},
                {text:"Hola 3"}
            ]
        }
    }

    render(){

        const {comments} = this.state;

        return(
            <Fragment>
                <title>Home</title>
                <div id="ctr-home">
                    {/*<PeopleCommentsList comments={comments}/>*/}
                    <LoginView/>
                </div>
            </Fragment>
        );
    }
}
export default Home;