// middleware boilerplate

export default ({dispatch}) => (next) => (action) =>{
    // check if the action has a promise on its 'payload'.
    // if yes, wait to resolve
    // if no, send the action to the next
    // debugger;
    if (!action.payload || !action.payload.then){
        return next(action);
    }

    action.payload.then(function(response){
        const newAction = {...action, payload: response};
        dispatch(newAction);
    })
}