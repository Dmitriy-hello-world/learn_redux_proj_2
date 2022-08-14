import { resetControls } from "./controlsSlice";
import { useDispatch } from "react-redux";

export const useClear = () => {
  const dispatch = useDispatch();

  const clearAll = dispatch(resetControls())
    
  return clearAll;
}
