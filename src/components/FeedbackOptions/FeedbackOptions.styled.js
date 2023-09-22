import styled from 'styled-components';

export const FeedbackButtons = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '0 auto',
  };
});
export const FeedbackButton = styled('button')(() => {
  return {
    padding: '10px 20px', // Змінено
    fontSize: '1rem', // Додано
    borderColor: 'transparent',
    borderRadius: '10px',
    fontWeight: '700',
    cursor: 'pointer', // Додано
    transition: 'background-color 0.3s ease', // Додано
    '&:hover': {
      backgroundColor: '#78f09a',
    },
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  };
});
