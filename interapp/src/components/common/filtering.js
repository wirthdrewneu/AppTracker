import React from 'react';


export default function Filters ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) {
    return (
        <div>
            <h5>Filter By</h5>
            <ul class="list-group">
                { items.map (item => 
                    <li 
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        class={(item.stage === selectedItem) ? "list-group-item active" : "list-group-item"}>
                            {item[textProperty]}
                    </li>
                )}
            </ul>
        </div>
    );
}