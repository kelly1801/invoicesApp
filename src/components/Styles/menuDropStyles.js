import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  color: ${(props) => props.theme.fontColor};
  h2 {
    color: ${(props) => props.theme.fontColor};
  }
`;
export const Title = styled.h2``
export const ShortTitle = styled.h2``
export const Summary = styled.div`
  display: flex;
  gap: 0.6rem;
  cursor: pointer;
  
  img {
    object-fit: contain;
  }

  ${ShortTitle}{
    display: none;
  }

  @media (max-width : 568px) {
    ${ShortTitle}{
      display: block;
    }
    ${Title}{
      display: none;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.3rem;
  background-color:  ${(props) => props.theme.main};;
  overflow: hidden;
  padding: 1rem 0;
   label {
    margin: 0.2rem 0;
    padding: 0 0.5rem;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width : 568px) {
    width: 6rem;
    padding: 0.5rem;
  }
`;
