import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails (props) {
    let { id } = useParams;
    console.log(props.match)
    console.log(id)
    return (
        <div>
            holaffffffffffffffffffff
        </div>
    )
}