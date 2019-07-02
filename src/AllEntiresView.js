import React, { Component }from 'react';
import { Link } from "react-router-dom";

class AllEntriesView extends Component {
    render(){
       
        const { entries } = this.props;
        console.log(entries);

        return(
            <>
            <ul>
               {
                   entries.forEach( (entry)=>{
                       return <li>{ entry }</li>
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

export default AllEntriesView;