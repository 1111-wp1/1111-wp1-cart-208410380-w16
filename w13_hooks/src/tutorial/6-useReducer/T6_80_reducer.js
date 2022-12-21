export const reducer_80 = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,  
            modalContent: 'item added'
        }
    }
    if(action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
            modalContent: ''
        }
    }
}