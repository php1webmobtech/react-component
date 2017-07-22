/**
 * Created by shraddha on 22/7/17.
 */
import React from "react";


const comment = {
    name:'Test Post',
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};


function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <h1>{props.post}</h1>
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}


export class Demo extends React.Component{
    render(){
        return <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
            post={comment.name}/>;
    }
}



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export class Demo1 extends React.Component{
    render(){
        return <div><Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" /></div>;
    }
}