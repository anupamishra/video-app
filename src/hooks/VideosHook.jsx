import { useContext } from "react";
import VideosContext from "../context/VideosContext";

function useVideosHook(){
    return useContext(VideosContext);
}

export default useVideosHook;