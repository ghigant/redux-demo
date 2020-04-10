export default store => next => action => {
    console.log(action, store.getState());
    next(action);
}