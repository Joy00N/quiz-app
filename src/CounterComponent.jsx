import React from 'react';

export default class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);

        this.state = {
            counter: 0
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    // handleClick() {
    //     this.setState({counter: this.state.counter + 1});
    //     this.forceUpdate();
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.callback}>
                    Button
                </button>

            </div>
        );
    }
}