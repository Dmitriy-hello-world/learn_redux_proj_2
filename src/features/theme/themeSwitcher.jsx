import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './use-theme';
import styled from 'styled-components';


export default function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher
      onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  )
}

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;