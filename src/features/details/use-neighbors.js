import { loadNeighbors } from './detailsSlice';
import { selectNeighbors } from './detailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbors(borders))
    }
  }, [borders, dispatch]);

  return neighbors;
}
