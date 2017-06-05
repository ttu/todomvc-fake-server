import * as types from '../constants/ActionTypes'
import superagent from 'superagent';

this.url = "http://localhost:57602";

// export const addTodo = text => ({ type: types.ADD_TODO, text })
export const addTodo = text => { return dispatch => {
    return superagent
        .post(`${this.url}/api/data/`)
        .send({ text: text, completed: false })
        .end((err, res) => dispatch({ type: types.ADD_TODO, id: res.id, text: text, completed: false }));
}};

// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const deleteTodo = id => { return dispatch => {
    return superagent
        .delete(`${this.url}/api/data/${id}`)
        .end((err, res) => dispatch({ type: types.DELETE_TODO, id }));
}};

// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const editTodo = (id, text) => { return dispatch => {
    return superagent
        .patch(`${this.url}/api/data/${id}`)
        .send({ text: text })
        .end((err, res) => dispatch({ type: types.EDIT_TODO, id: id, text: text }));
}};

// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeTodo = id => { return dispatch => {
    return superagent
        .patch(`${this.url}/api/data/${id}`)
        .send({ completed: true })
        .end((err, res) => dispatch({ type: types.COMPLETE_TODO, id: id }));
}};

// New get function
export const getTodos = () => { return dispatch => {
    return superagent
        .get(`${this.url}/api/data/`)
        .end((err, res) => {
            if (err)
                dispatch({ type: types.GET_TODOS, data: [] });
            else
                dispatch({ type: types.GET_TODOS, data: res.body });
        });
}};

// As BE is extremely general REST API we need to collect id's in the Front and do multiple updates

// export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const completeAll = ids => { return dispatch => {
    var promises = ids.map(id => {
        return new Promise((resolve, reject) => {
            superagent
                .patch(`${this.url}/api/data/${id}`)
                .send({ completed: true })
                .end((err, res) => resolve());
        });
    });
    Promise.all(promises).then(results => dispatch(({ type: types.COMPLETE_ALL })));
}};

export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
