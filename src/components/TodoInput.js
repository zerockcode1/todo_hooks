import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {addTodo} from "./todoService";

const TodoInput = ({tno = 0, title = '', content ='', regDate ='', modDate ='', requestRefresh}) => {

    const [titleValue, setTitleValue] = useState(title)
    const [contentValue, setContentValue] = useState(content)

    const changeTitle = useCallback(e => {
        setTitleValue(e.target.value)
    })
    const changeContent = useCallback(e => {
        setContentValue(e.target.value)
    })

    const submit = useCallback(e => {
        console.log('submit' + requestRefresh)
        addTodo({title: titleValue, content: contentValue}, requestRefresh)
        setTitleValue('')
        setContentValue('')
    })



    return (
        <div>
            <h1>Todo Input</h1>
            <div>
            <TextField type={"text"} value ={tno} placeholder={"tno"}/>
            </div>
            <div>
            <TextField type={"text"} value ={titleValue} placeholder={"title"} onChange={changeTitle} />
            </div>
            <div>
                <TextField type={"text"} value ={contentValue} placeholder={"content"}  onChange={changeContent}/>
            </div>
            <div>
                <TextField type={"date"} value ={regDate} placeholder={"regDate"}/>
            </div>
            <div>
                <TextField type={"date"} value ={modDate} placeholder={"modDate"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={submit}>ADD</Button>
            </div>

        </div>
    );
};

export default TodoInput;