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
    member_name: [{
        name: "",
        stdID: ""
    }],
    people: 0
}

const getClub = {
    club_name: '',
    member_name: [{
        name: "",
        stdID: ""
    }],
    club_image: '',
    club_des: '',
    id: 0,
    people: 0
}

export const listAction = {
    login: (login) => async (dispatch) => {
        const result = await axios.post(`http://localhost:8899/Login`, { ...login });
        const [id, name, surname] = [...result.data.GetStudentDetailsResult.string]
        dispatch({ type: 'LOGIN', id: id, username: name, surname: surname })
    },
    logout: () => async (dispatch) => {
        dispatch({ type: "LOGOUT" })
    },
    getClub: () => async (dispatch) => {
        const response = await axios.get(`http://localhost:8899/clublist`)
        const responseBody = await response.data;
        dispatch({ type: "GET_CLUB", club_lists: responseBody });
    },
    addClub: (form) => async (dispatch) => {
        await axios.post(`http://localhost:8899/clublist/`, { ...form })
        dispatch({ type: "ADD_CLUB", club_list: { ...form } })
    },
    deleteClub: (idx) => async (dispatch) => {
        axios.delete(`http://localhost:8899/delete/${idx}`, idx)
        dispatch({ type: "DELETE_CLUB", id: idx.id })
    },
    updateClub: (club_list) => async (dispatch) => {
        await axios.put(`http://localhost:8899/update/${club_list.id}`, club_list)
        dispatch({ type: 'UPDATE_CLUB', club_list: club_list, id: club_list.id })
    },
    updatePeople: (member) => async (dispatch) => {
        await axios.put(`http://localhost:8899/update/${member.id}`, member)
        dispatch({ type: 'UPDATE_PEOPLE', people: member })
    },
    updateMember: (member) => async (dispatch) => {
        await axios.put(`http://localhost:8899/update/${member.id}`, member)
        dispatch({
            type: 'UPDATE_MEMBER', member_name: [{
                name: member.name,
                stdID: member.stdID
            }]
        })
    },
    showClub: (id) => async (dispatch) => {
        axios
            .get(`http://localhost:8899/clublist/${id}`)
            .then(res => {
                dispatch({ type: 'CHANGE_CLUB', club: res.data })
            })
    },
    change_club_name: (s) => ({ type: 'CHANGE_CLUB', club_name: s }),
    change_member_name: (s) => ({ type: 'CHANGE_MEMBER', member_name: s }),
    change_club_image: (s) => ({ type: 'CHANGE_CLUBIMAGE', club_image: s }),
    change_club_des: (s) => ({ type: 'CHANGE_DES', club_des: s }),
    change_people: (s) => ({ type: 'CHANGE_PEOPLE', people: s })
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
                id: '',
                username: '',
                surname: ''
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