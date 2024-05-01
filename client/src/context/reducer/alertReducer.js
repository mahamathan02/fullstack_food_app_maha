const alerreducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SUCCES":
      return action.alert;

    case "SET_WARNING":
      return action.alert;

    case "SET_DANNGER":
      return action.alert;

    case "SET_INFO":
      return action.alert;

    case "SET_NULL":
      return action.alert;
    default:
      return state;
  }
};

export default alerreducer;
