import { useState } from 'react';
import '../assests/css/List.css';

interface ListProps {
    items: Array<{
       value: any
    }> | null
    onDelete?: (item: any) => void
    onUpdate?: (item: any) => void
}

function List({ items, onDelete=()=>{}, onUpdate=()=>{} }: ListProps) {
    return ( 
        <ul className="list-group">
            {items &&
                items.map((item, index) => (
                    <li className="list-group-item row" key={index}>
                        <div className="col">
                            {item.value}
                        </div>
                        <div className="col">
                            <button onClick={() => onDelete(item.value.props.task)} className="btn btn-danger">
                                Delete
                            </button>
                            <button onClick={() => onUpdate(item.value.props.task)} className="btn btn-success">
                                Update
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default List;