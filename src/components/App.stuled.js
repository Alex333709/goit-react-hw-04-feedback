import styled from 'styled-components';

// Створіть стилізований компонент для основного div
export const AppContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '1rem',
    backgroundColor: '#f4f4f4',
  };
});
