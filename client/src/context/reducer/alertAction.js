export const alertsucces = (message) => {
  return {
    type: "SET_SUCCES",
    alert: { type: "success", message: message },
  };
};

export const alertwarning = (message) => {
  return {
    type: "SET_WARNING",
    alert: { type: "warning", message: message },
  };
};

export const alertdanger = (message) => {
  return {
    type: "SET_DANNGER",
    alert: { type: "danger", message: message },
  };
};

export const alertinfo = (message) => {
  return {
    type: "SET_INFO",
    alert: { type: "Info", message: message },
  };
};
export const alertnull = (message) => {
  return {
    type: "SET_NULL",
    alert: null,
  };
};
