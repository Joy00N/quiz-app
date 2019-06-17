import React from 'react';
import './App.css';
import AuthorQuiz from './AuthorQuiz.jsx';
import CounterComponent from './CounterComponent.jsx';
import {shuffle, sample, find} from 'lodash';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/yoon/yoo1.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Ugly']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/yoon/yoo2.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Ugly']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/yoon/yoo3.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Ugly']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/yoon/yoo4.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['Ugly']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/yoon/yoon1.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Pretty']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/yoon/yoon2.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Pretty']
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

        const choice = ['Pretty', 'Ugly'];
        const answer = sample(choice);

        return {
            books: choice,
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
