
// Assign a variable to the ADD_NOVEL type
export const ADD_NOVEL = "ADD_NOVEL"

// action creator
export const addNovel = (novel) => ({
    type: ADD_NOVEL,
    payload: { novel }
 });


 
// Assign a variable to the DELETE_NOVEL type
export const DELETE_NOVEL = "DELETE_NOVEL"

// action creator
export const deleteNovel = (id) => ({
    type: DELETE_NOVEL,
    payload: { id }
 });


 
// Assign a variable to the AMEND_STATUS type
// export const AMEND_STATUS = "AMEND_STATUS"

// action creator
// export const amendStatus = id => ({
//     type: AMEND_STATUS,
//     payload: { id }
//  });


 
// Assign a variable to the FETCH_NOVELS type  action type
export const FETCH_NOVELS = "FETCH_NOVELS"

// action creator
export const fetchNovels = (novels) => ({
    type: FETCH_NOVELS,
    payload: { novels: novels }
 });



// Assign a variable to the NOVELS_LOADING type
export const NOVELS_LOADING = "NOVELS_LOADING"

// action creator
export const novelsLoading = () => ({
    type: NOVELS_LOADING,
 });



// Assign a variable to the NOVELS_LOADING type
export const NOVELS_SUCCESS = "NOVELS_SUCCESS"

// action creator
export const novelsSuccess = (novels) => ({
    type: NOVELS_SUCCESS,
    payload: { novels }
 });



 // Assign a variable to the NOVELS_LOADING type
export const NOVELS_FAILURE = "NOVELS_FAILURE"

// action creator
export const novelsFailure = (errorMessage) => ({
    type: NOVELS_FAILURE,
    payload: { errorMessage }
 })