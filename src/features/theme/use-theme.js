import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTheme } from './themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => { 
    dispatch(addTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return [theme, toggleTheme];
}