import React from 'react'

let Line = (props) =>{

    let TodosContext = (
        <>
        <button className="InteractButton" onClick={props.Done}> ✓ </button>
        <div className={props.className}
        style={{textDecoration:props.style?"line-through":"none"}}
        onClick={props.onClick}
        >{props.elementVal}</div>
        <button className="InteractButton" onClick={props.Remove}> ✖ </button>
        </>
    );

    if(props.editAble){
        TodosContext = (
            <input className="EditDiv"
            value={props.value}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            maxLength="41"
            placeholder={"No matter what, you have to write something"}
            autoFocus
            ></input>
        )
    }

    return(
        <>
        {TodosContext}
        </>
    )
}

export default Line;