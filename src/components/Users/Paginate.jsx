import React, {useState} from 'react';
import s from "./Users.module.css";

function Paginate(props,
                  currentPage = 1,
                  onPageChanged = x => x,
                  portionSize = 10) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>

            { portionNumber > 1 &&
                <button className={s.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                return (<span key={p.id} className={(props.currentPage) === p && s.checked} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>);
            })}

            { portionCount > portionNumber &&
                <button className={s.next} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

        </div>
    );
}

export default Paginate;