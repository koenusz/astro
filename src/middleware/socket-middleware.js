export default (socket, channelName = "action") => store => {
  socket.on(channelName, store.dispatch);
  return next => action => {
    if (action.meta && action.meta.remote) {
      socket.emit(action.type, action);
    }
    return next(action);
  }
}
