import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './bootstrap.min.css';

function Hero() {
    return (
        <div>
            <div className="row">
                <h1>Ugly Detection Quiz</h1>
            </div>
            <div className="row">
                <p>Let us know what you think!</p>
            </div>
        </div>
    );
}

function Book({title, onClick}) {
    return (
        <div className="answer" onClick={() => {
            onClick(title);
        }}>
            <h4>{title}</h4>
        </div>
    )
}

function Turn({author, books, highlight, onAnswerSelected}) {
    function highlightToBgColor(highlight) {
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        };
        return mapping[highlight];
    }

    return (
        <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author"/>
            </div>
            <div className="col-6">
                {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
            </div>
        </div>
    );
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
};

function Continue() {
    return (<div/>);
}

function Footer() {
    return (
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    @Joy00N
                </p>
            </div>
        </div>
    )
}

class AuthorQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    input;

    render() {
        return (
            <div className="container-fluid">
                <Hero/>
                <input ref= {(c) => this.input = c} value={this.state.value} onChange={this.handleChange}/>
                <Turn {...this.props.turnData} highlight={this.props.highlight}
                      onAnswerSelected={this.props.onAnswerSelected}/>
                <Continue/>
                <Footer/>
            </div>
        );
    }

}

export default AuthorQuiz;