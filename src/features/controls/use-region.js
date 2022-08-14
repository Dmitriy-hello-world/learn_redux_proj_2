import { useDispatch, useSelector } from "react-redux";
import { addRegion, selectRegion } from "./controlsSlice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const onHandleChange = (reg) => {
    dispatch(addRegion(reg?.value || ''));
  }

  return [region, onHandleChange];
}
