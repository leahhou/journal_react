import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EntryForm extends Component {
    state = { entry: "", error: null};

    onTextAreaChange = (event) => {
       this.setState({ entry: event.target.value});
    }

    onFormSubmit = (event) => {
        const { entry } = this.state;
        const { onEntryFormSubmit } = this.props;
        event.preventDefault();

        if (entry) {
            onEntryFormSubmit(entry);
            return this.setState({entry: ""});
        }
        return this.setState({ error: "Entry cannot be blank"})
    }

    render(){
       const { entry} = this.state;
        return(
            <>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <textarea value={ entry } onChange={this.onTextAreaChange}></textarea>
                    </div>
                    <input type="submit" value="create an entry"></input>
                </form>
                <Link to="/allentires">
                    <button>See all entries</button>
                </Link>
            </>
        );
    }
}

export default EntryForm;