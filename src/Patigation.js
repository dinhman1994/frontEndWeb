import React, { useState, useEffect } from 'react';
import './Patigation.css';

function Patigation({setCurrentPage }){
    const [limitPage, setLimitPage] = useState(1);
    const changeLimitPage = () => {
        console.log(limitPage);
        setLimitPage(limitPage+5);
    }
    const changeLimitPage2 = () => {
        console.log(limitPage);
        setLimitPage(limitPage-5);
    }
    useEffect(() => {
        console.log(limitPage);
    },[limitPage])
    return(
        <div className="patigation">
            {limitPage > 1 ?
            <button onClick={changeLimitPage2}>{'<' }</button> :null}
            <button onClick={setCurrentPage(limitPage)} >{limitPage}</button>
            <button onClick={setCurrentPage(limitPage+1)} >{limitPage+1}</button>
            <button onClick={setCurrentPage(limitPage+2)} >{limitPage+2}</button>
            <button onClick={setCurrentPage(limitPage+3)} >{limitPage+3}</button>
            <button onClick={setCurrentPage(limitPage+4)} >{limitPage+4}</button>
            <button onClick={changeLimitPage}>></button>
        </div>
    )
}

export default Patigation;