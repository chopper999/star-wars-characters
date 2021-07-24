import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSWC } from './../actions/SWCActions';

export const SWCListScreen = () => {
    const pageNumber = 1;
    const SWCList = useSelector(state => state.SWCList);
    const {people, success, error} = SWCList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listSWC({pageNumber}));
    }, []);
    return (
        <div>
            TABLE
        </div>
    )
}
