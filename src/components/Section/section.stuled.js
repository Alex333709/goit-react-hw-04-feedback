import styled from 'styled-components';

export const SectionStyled = styled('section')(() => {
  return {
    width: '80%', // Додано
    maxWidth: '800px', // Додано
    margin: '0 auto', // Додано
    padding: '20px 10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Додано
    h2: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '40px',
      fontWeight: '500',
    },
  };
});
