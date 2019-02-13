import React from 'react';

class Comment extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div className="comment">
                <img className="comment--thumb" src={this.props.thumbnail} alt="avatar"/>
                <div>
                    <a className="comment--title" href="#"><h4>{this.props.titleName}</h4></a>
                    <p className="comment--describe">{this.props.describe}</p>
                    <ul className="comment--list">
                        <li><a href="#">Like</a></li>
                        <li><a href="#">Reply</a></li>
                        <li><small>{this.props.timespan}</small></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Comment;