import React, {useCallback} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const TodoList = ({pageResult, movePage}) => {

    const classes = useStyles();

    console.log("--------------------------------")
    console.log(pageResult)

    const todos = pageResult.dtoList || []

    const changePage = useCallback((e,value) => {
        console.dir(value);
        movePage(value)
    })


    const list = todos.map(todo => {
        return (
            <div key={todo.tno} >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={todo.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </div>
        )
    })


    return (
        <div>
            <List className={classes.root}>
                {list}
            </List>

            <div className={classes.root}>

                <Pagination count={10}
                            hidePrevButton={!pageResult.prev}
                            defaultPage={1}
                            page={pageResult.page||1}
                            color="primary"
                            onChange={changePage}
                />
            </div>
        </div>
    );
}

export default TodoList;