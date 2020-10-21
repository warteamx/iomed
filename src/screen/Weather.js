import React from 'react'
import Card from '../components/Card/'
import Searchbox from '../components/Searchbox'

export default function Weather() {
    return (
        <div>
            <h1> Weather Page</h1>
            <Searchbox />
            <div> Saved Results </div>
           <Card />
        </div>
    )
}
