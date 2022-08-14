import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "./controlsSlice";
import { addSearch } from "./controlsSlice";

export const useSearch = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);
 
  const handleAddFilter = (e) => {
    dispatch(addSearch(e.target.value));
  };

  return [searchValue, handleAddFilter];
}
