import React, { useState } from 'react';

import Item from '../Item';
import NewsOne from '../NewsOne';

const List = ({ data, removeFromProps, updateFromProps }) => {
    const [count, changeCount] = useState(2);
    return(
        <>
            <ul className="news">
                {
                    data.slice(0, count).map(item => (
                        <>
                        <Item
                            removeFromList={removeFromProps}
                            updateFromList={updateFromProps}
                            key={item.id}
                            item={item}
                        />
                        </>
                    ))                      
                }
            </ul>
            <button className ="addnews" onClick = {() => changeCount(count + 2)}>
                Показать еще
            </button>
        </>
    );
}

export default List;