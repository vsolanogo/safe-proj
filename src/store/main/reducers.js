const splashReducer = (state, action) => {
  switch (action.type) {
    case "HIDE_SPLASH":
      return {
        ...state,
        hide: true,
      }

    default:
      return state
  }
}

const headerReducer = (state, action) => {
  switch (action.type) {
    case "SET_HEADER_COLORS":
      return {
        ...state,
        logoColor: action.payload.logoColor,
        contentColor: action.payload.contentColor,
        backgroundColor: action.payload.backgroundColor,
      }

    case "SET_LOGO_COLOR":
      return { ...state, logoColor: action.payload }

    case "SET_CONTENT_COLOR":
      return { ...state, contentColor: action.payload }

    case "SET_BACKGROUND_COLOR":
      return { ...state, backgroundColor: action.payload }

    default:
      return state
  }
}

export default function appReducer(state, action) {
  return {
    splash: splashReducer(state.splash, action),
    header: headerReducer(state.header, action),
  }
}

export const mainReducerinitialValue = {
  splash: {
    hide: false,
  },
  header: {
    backgroundColor: "#fff",
    contentColor: "#181930",
    logoColor: "#181930",
    shadow: "rgb(0 0 0 / 10%) 0px 4px 53px",
  },
}
