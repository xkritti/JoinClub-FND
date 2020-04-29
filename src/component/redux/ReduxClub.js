import thunk from 'redux-thunk'
import axios from "axios";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const psupassLogin = {
    id: '',
    username: '',
    surname: '',
}

const clubList = {
    club_name: '',
    club_image: '',
    club_des: '',
    member_name: [],
    people: 0
}

const getClub = {
    club_name: '',
    member_name: [],
    club_image: '',
    club_des: '',
    id: 0,
    people: 0
}

export const listAction = {
    login: (login) => async (dispatch) => {
        const result = await axios.post(`https://joinclub.herokuapp.com/Login`, { ...login });
        const [id, name, surname] = [...result.data.GetStudentDetailsResult.string]
        dispatch({ type: 'LOGIN', id: id, username: name, surname: surname })
    },
    logout: () => async (dispatch) => {
        dispatch({ type: "LOGOUT" })
    },
    getClub: () => async (dispatch) => {
        const response = await axios.get(`https://joinclub.herokuapp.com/clublist`)
        const responseBody = await response.data;
        dispatch({ type: "GET_CLUB", club_lists: responseBody });
    },
    addClub: (form) => async (dispatch) => {
        await axios.post(`https://joinclub.herokuapp.com/clublist/`, { ...form })
        dispatch({ type: "ADD_CLUB", club_list: { ...form } })
    },
    deleteClub: (idx) => async (dispatch) => {
        axios.delete(`https://joinclub.herokuapp.com/delete/${idx}`, idx)
        dispatch({ type: "DELETE_CLUB", id: idx.id })
    },
    updateClub: (club_list) => async (dispatch) => {
        await axios.put(`https://joinclub.herokuapp.com/update/${club_list.id}`, club_list)
        dispatch({ type: 'UPDATE_CLUB', club_list: club_list, id: club_list.id })
    },
    showClub: (id) => async (dispatch) => {
        axios
            .get(`https://joinclub.herokuapp.com/clublist/${id}`)
            .then(res => {
                dispatch({ type: 'CHANGE_CLUB', club: res.data })
            })
    },
}

const loginReduxClub = (data = psupassLogin, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...data,
                id: action.id,
                username: action.username,
                surname: action.surname
            }
        case "LOGOUT":
            return {
                ...data,
                id: undefined,
                username: undefined,
                surname: undefined
            }
        default:
            return data
    }
}

const clubReduxClub = (data = [], action) => {
    switch (action.type) {
        case "GET_CLUB":
            return action.club_lists
        case "ADD_CLUB":
            return [...data, action.club_list]
        case "DELETE_CLUB":
            return data.filter(club_list => + action.id !== + club_list.id)
        case "UPDATE_CLUB":
            return data.map(club_list => {
                if (+club_list.id === +action.id)
                    return action.club_list
                else
                    return club_list
            })
        case "UPDATE_MEMBER":
            return data.map(club_list => {
                if (+club_list.id === +action.id)
                    return action.club_list
                else
                    return club_list
            })
        default:
            return data
    }
}

const formReduxClub = (data = clubList, action) => {
    switch (action.type) {
        case "CHANGE_CLUB":
            return {
                ...data,
                club: action.club_name
            }
        case "CHANGE_MEMBER":
            return {
                ...data,
                member: action.member_name
            }
        case "CHANGE_CLUBIMAGE":
            return {
                ...data,
                image: action.club_image
            }
        case "CHANGE_DES":
            return {
                ...data,
                description: action.club_des
            }
        case "CHANGE_PEOPLE":
            return {
                ...data,
                people: action.people
            }
        default:
            return data
    }
}

const getReduxClub = (data = getClub, action) => {
    switch (action.type) {
        case "CHANGE_CLUB":
            return {
                ...action.club
            }
        default:
            return data
    }
}

const rootReduxClub = combineReducers({
    login: loginReduxClub,
    formClub: formReduxClub,
    clubReduc: clubReduxClub,
    getClub: getReduxClub
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ReduxClub = createStore(rootReduxClub, composeEnhancers(applyMiddleware(thunk)))

export default ReduxClub