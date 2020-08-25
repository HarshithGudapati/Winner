import React from "react";
function List(props) {
    return <div>
        <ol>
            {props.data.map(function (item) {
                return <li key={item}>{item}</li>
            }
            )}
        </ol>
    </div>
}
export default List;