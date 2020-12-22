import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: left;
  background: ${({ theme }) => theme.content};

  .card {
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }

  .card-body {
    padding: 12px;
    background: ${({ theme }) => theme.cardBg};
  }
`;

export default ContentContainer;
