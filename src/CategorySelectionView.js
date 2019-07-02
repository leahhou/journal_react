import React, { Component }from 'react';
import { Link } from "react-router-dom";

class CategorySelectionView extends Component {
    static defaultProps = {
        categories: []
    }

    render() {
        const { categories } = this.props;
       return (
        <>
            <h1>What type of entry would you like to write?</h1>
            <ul>
               {
                   categories.map((category,index)=>{
                       return (
                        <Link key={category} to={`/entry/new/${index}`}>
                            <button> {category} </button>
                        </Link>
                       )
                   })
               }
            </ul>
            <Link to="/">
                <button>Return to Home</button>
            </Link>
        </>
       )

       
       
    }
}

export default CategorySelectionView; 