import React from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = React.useState({
        data: [],
        loading: true
    });

    React.useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    }, [category]);

    return state;
}
