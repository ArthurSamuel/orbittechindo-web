import styled from "@emotion/styled";

export const Container = styled.div`
  column-count: 5;
  column-gap: 16px;
`;

export const CardContent = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;

  img {
    max-height: 350px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
