import styled from 'styled-components';

export const NotificationMessage = styled('p')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '24px',
    color: 'red',
  };
});
