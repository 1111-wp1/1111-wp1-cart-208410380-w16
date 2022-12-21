const Reducer_80 = (state, action) => {
    if (action.type === 'REMOVE_ITEM') {
        const filteredCart = state.blogs.filter((item) => 
        item.id !== action.payload);
        return { ...state, blogs: filteredCart}
    }
    if (action.type === 'GET_TOTAL') {
        return { ...state }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true}
    }

    if (action.type === 'SHOW_ALERT') {
        return {...state, alert: action.payload}
    }
}

export default Reducer_80;
