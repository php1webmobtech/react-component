/**
 * Created by shraddha on 22/7/17.
 */

import React from "react";
import ReactDom from "react-dom";
import {Demo,Demo1} from "./src/demo";


class App extends React.Component{
    render(){
        return <div><Demo/><Demo1/></div>;
    }
}

ReactDom.render(<App/>,document.getElementById('app'));
