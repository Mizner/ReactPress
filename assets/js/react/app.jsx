import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

export class Posts extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            Posts: []
        };
    }
    componentDidMount()
    {
        fetch('//react.dev/wp-json/wp/v2/posts')
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error("Server response wasn't OK");
                }
            })
            .then((responseData) => {
                this.setState({Posts:responseData});
            })
    }
    render() {
        let posts = this.state.Posts.map((post) => (
            <li key={post.id}>{post.title.rendered}</li>
        ));
        return (
            <div className="Post">
                <h1>Hellos {posts}</h1>
                <span>{console.log('stuff')}</span>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Posts></Posts>
    </div>,
    document.querySelector("#main"));
