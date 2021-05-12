import React, { Component } from 'react';
import todoContext from './../context/todoContext';




class Header extends Component {
    render() {
        return (

            <todoContext.Consumer>
                {context => (

                    <div className='myheader'>
                        Welcome | Webidemy To do list
                    </div>


                )}


            </todoContext.Consumer>)


    }

}

export default Header;