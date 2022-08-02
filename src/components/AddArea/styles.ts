import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  margin: 20px 0;
  padding: 10px;
  display: flex;
  align-items: center;

  .image {
    font-size: 2rem;
    margin-right: 10px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 1rem;
    flex: 1;
  }
`;