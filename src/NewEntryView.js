import React, { Component }from 'react';
import { Link } from "react-router-dom";
import  EntryForm  from './EntryForm';

class NewEntryView extends Component {
    render() {
        const { id } = this.props.match.params;
        const { categories, onEntryFormSubmit } = this.props;
 

        if(!categories[id]) {
            return <div>Invalid categories</div>
        }

        return (
            <>
            <h1> New Entry For {categories[id]}</h1>

            <EntryForm onEntryFormSubmit= { onEntryFormSubmit }/>

            <Link to="/category">
               <button>Select Other Categories</button>
            </Link>

            <Link to="/">
               <button>Return to Home</button>
            </Link>
            </>
           )
    }
}

export default NewEntryView;