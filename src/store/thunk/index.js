


import axios from "axios";
import { addNovel, fetchNovels, deleteNovel,  novelsLoading, novelsSuccess, novelsFailure } from "../action";





// thunk for adding a todo
export const createNovel = (text) => async (dispatch, getState) => {
    try {
        const response = await axios.post('http://localhost:7000/api/novels/add',  {headers: {'Content-Type': 'multipart/form-data'}}, {text});

        const { data } = response
        console.log("data", data);

        // if(getState().loading === false) {
        //     alert('yes the state is false')
        // }
        dispatch(addNovel(data));

    } catch (error) {
        console.log(error);
    }
}


// thunk for fetching a todos
export const getNovels = () => async (dispatch, getState) => {
    try {
        dispatch(novelsLoading());
    const response = await axios.get('http://localhost:7000/api/novels/fetch');

        const { data } = response
        dispatch(fetchNovels(data));

        dispatch(novelsSuccess());

        console.log(data);
        console.log(response);
        // console.log('this is the state', getState());

    } catch (error) {
        dispatch(novelsFailure());
        console.log(error.response.data.msg);
    }
}

// thunk for deleting a todo
export const removeNovel = id => async dispatch => {
    try {

    const response = await axios.delete(`http://localhost:7000/api/novels/delete/${id}`);

        // const { text } = response
        dispatch(deleteNovel(id));

        console.log(response);

        // console.log('this is the state', getState());

    } catch (error) {
        console.log(error);
    }
}


// thunk for amending a status
// export const changeStatus = (id) => async ( dispatch) => {
//     try {
    // const {id} = req.params
    // const response = await axios.put(`http://localhost:8000/update/${id}`);

    //     const { data } = response
       
    //     dispatch(amendStatus(id));
    //     console.log(data);
    //     console.log("Identity", id);
    //     console.log("id",response.data.id);

        // console.log('this is the state', getState());

//     } catch (error) {
//         console.log(error);
//     }
// }



