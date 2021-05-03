import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import List from './components/list';


class App extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header />
                <List className=' w-50 bg-primary' />


            </Fragment>



        )

    }
}

export default App;