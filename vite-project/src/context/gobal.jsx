import React, {createContext,useContext,useReducer,useEffect} from "react";

const GlobalContext = createContext()

const baseUrl = "https://api.jikan.moe/v4"

const LOADING = "LOADING"
const SEARCH = "SEARCH"
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME"
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME"
const GET_AIRING_ANIME = "GET_AIRING_ANIME"



const reducer = (state,action) => {
    switch (action.type) {
        case LOADING:
            return{...state,loading:true}
        case GET_POPULAR_ANIME:
            return{...state,popularAnime:action.payload,loading:false}
        default:
            return state
    }
}

export const GlobalContextProvider = ({children}) => {

   

    const intialState = {
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        pictures:[],
        isSearch:false,
        searchResults:[],
        loading:false,
    }

    const [state,dispatch] = useReducer(reducer,intialState)

const getPopularAnime = async()=>{
    dispatch({type:LOADING})
    const respond = await fetch(`${baseUrl}/top/anime?filter=bypopularity`)
    const data = await respond.json()
    dispatch({type:GET_POPULAR_ANIME,payload:data.data})
}

useEffect(() => {getPopularAnime()},[])



    return(
        <GlobalContext.Provider value={{
            ...state
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}