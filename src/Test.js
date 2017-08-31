import React from 'react';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Tibin Lukose'
                }, {
                    id: 2,
                    name: 'Subin Lukose'
                }
            ]
        };
    }
    render() {
        return (

            <div>
                <Header/>
                <h1>Welcome to ooty!! Nice to meet you!!!!</h1>
                <table>
                    {this
                        .state
                        .data
                        .map((user, i) =>< TableRow key = {
                            i
                        }
                        data = {
                            user
                        } />)}
                </table>
                {1 == 1
                    ? 'True'
                    : 'False'}
                <Footer/>
            </div>

        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        )
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>

            </tr>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <h1>Footer</h1>
        )
    }
}
export default Test;