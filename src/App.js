import React, { Component }from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from './HomeView';
import CategorySelectionView from './CategorySelectionView';
import NewEntryView from './NewEntryView';
import AllEntiresView from './AllEntiresView';

class App extends Component {
    state= {
        categories: ["food", "thoughts", "others"],
        entries: []
    }
    
    onEntryFormSubmit = (value)=> {
        let entries = this.state.entries;
        this.setState({ entries: [...entries, value]}); //=> clone the original state & push new value in is OK.
        // this.state.entries.push(value); => DON'T EVER CHANGE A STATE; as REACT may NOT recognise as it is a change in the state;
    }

    render() {
       return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={HomeView}/>

                <Route 
                    exact 
                    path="/category" 
                    render={(props)=>{
                        return <CategorySelectionView {...props} categories={this.state.categories}/>
                    }}
                />

                <Route 
                    exact 
                    path="/entry/new/:id" 
                    render={(props)=>{
                        return <NewEntryView {...props} categories={this.state.categories} onEntryFormSubmit={this.onEntryFormSubmit}/>
                    }}
                />

                <Route 
                    exact 
                    path="/allentires" 
                    render={(props)=>{
                        return <AllEntiresView {...props} entries={this.state.entries}/>
                    }}
                />
            </BrowserRouter>
        </div>
       )
    }
}

export default App;  