import React, {useEffect, useState} from 'react';
import TodoInput from "./TodoInput";
import {Container} from "@material-ui/core";
import TodoList from "./TodoList";
import {getPage} from "./todoService";

const Todo = () => {

    const [refresh, setRefresh] = useState(false);

    const [pageResult, setPageResult] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const requestRefresh = (result) => {

        console.log("---------------------------")
        console.log(result)
        setRefresh(!refresh)
    }

    const getPageData = () => {
        const res = getPage(currentPage)
        res.then(res => {
            console.log(res.data)
            setPageResult(res.data)
        })
    }

    const movePage = (pageNum) => {
        setCurrentPage(pageNum)
    }

    useEffect(getPageData,[currentPage])

    return (
        <div>
            <Container>
                <h1>Simple Todo</h1>
                <TodoInput  title ={'AAA'} requestRefresh = {requestRefresh}> </TodoInput>
            </Container>
            <Container>
                <TodoList pageResult={pageResult} movePage ={movePage}></TodoList>
            </Container>
        </div>
    );
};

export default Todo;