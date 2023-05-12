import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function useVideoDispathHook(){
    return useContext(VideoDispatchContext);
}

export default useVideoDispathHook;