import React from 'react';
import Comment from '../components/comment';
import '../sass/main.scss';
// import dataComments from '../json/comments.json';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            thumb: "",
            txtArea: "",
            txtNome: "",
            comments: []
            // comments: dataComments.comments
        }
        this.setThumb = this.setThumb.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setTxtArea = this.setTxtArea.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    setThumb(event){
        this.setState({thumb: URL.createObjectURL(event.target.files[0])});
    }
    setTxtArea(event){
        this.setState({txtArea: event.target.value});
    }
    setNome(event){
        this.setState({txtNome: event.target.value});
    }

    addComment(event){
        event.preventDefault();
        let newComment = this.state.comments.slice();
        newComment.push({
            thumbnail: this.state.thumb,
            titleName: this.state.txtNome,
            describe: this.state.txtArea,
            timespan: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
        });
        this.setState({comments: newComment});
    }

    render(){
        return(
            <div className="container app">
                <form className="app--form" onSubmit={this.addComment}>
                    <div class="form-group">
                        <label>Foto</label>
                        <input className="form-control" type="file" onChange={this.setThumb}/>
                    </div>
                    <div class="form-group">
                        <label>Nome:</label>
                        <input className="form-control" type="text" value={this.state.txtNome} onChange={this.setNome}/>
                    </div>
                    <div class="form-group">
                        <label>Descrição:</label>
                        <textarea className="form-control" value={this.state.txtArea} onChange={this.setTxtArea}></textarea>
                    </div>
                    <div className="form-submit">
                        <button className="btn btn-primary" type="submit">Enviar <i class="fas fa-arrow-right"></i></button>
                    </div>
                </form>
                <div>
                    {this.state.comments.map((item, i) => <Comment key={i} thumbnail={item.thumbnail}
                            titleName={item.titleName}
                            describe={item.describe}
                            timespan={item.timespan}
                        /> )
                    }
                </div>
            </div>
        );
    }
}

export default App;