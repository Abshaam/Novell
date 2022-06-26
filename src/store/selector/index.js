// import { createSelector } from "reselect"

export const getNovelsData = state => state.novels.data



export const getNovelsLoading = state => state.novels.loading


// export const completeNovels = createSelector(
//     getNovelsData,
//     (novels) => novels.filter(novel => novel.isCompleted)
// )

// export const IncompletedTodos = createSelector(
//     getNovelsData,
//     (novels) => novels.filter(novel => !novel.isCompleted)
// )