import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../features/theme/themeSwitcher';
import { Container } from './Container';
import { useClear } from '../features/controls/use-clear';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const clearControls = useClear();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title
            onClick={clearControls} 
          >Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
