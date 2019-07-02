import React, { Component }from 'react';
import { Link } from "react-router-dom";

class HomeView extends Component {
    render() {
       return (
        <>
        <h1>HomePage</h1>
        <Link to="/category">
           <button>Create New Entry</button>
        </Link>
        <Link to="/allentires">
           <button>See all entries</button>
        </Link>
        </>
       )
      
    }
}

export default HomeView;  