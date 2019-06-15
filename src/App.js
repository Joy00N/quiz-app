import React from 'react';
import './App.css';
import AuthorQuiz from './AuthorQuiz.jsx';
import CounterComponent from './CounterComponent.jsx';
import {shuffle, sample} from 'lodash';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            turnData: this.getTurnData(authors),
            highlight: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.onAnswerSelected = this.onAnswerSelected.bind(this);
    }

    getTurnData(authors) {
        const allBooks = authors.reduce(function (p, c, i) {
            return p.concat(c.books);
        }, []);
        const fourRandomBooks = shuffle(allBooks).slice(0, 4);
        const answer = sample(fourRandomBooks);

        return {
            books: fourRandomBooks,
            author: authors.find((author) =>
                author.books.some((title) =>
                    title === answer))
        }
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    onAnswerSelected(answer) {
        const isCorrect = this.state.turnData.author.books.some((book) => book === answer);
        this.setState({highlight: isCorrect ? 'correct' : 'wrong'});
    }


    render() {
        return (
            <div>
                <AuthorQuiz {...this.state} onAnswerSelected={this.onAnswerSelected}/>
                <CounterComponent callback={this.handleClick}/>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default App;
