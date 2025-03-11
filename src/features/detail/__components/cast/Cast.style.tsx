import styled from "@emotion/styled";

export const AvatarContainer = styled.div`
  overflow: hidden;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid #dedede;
  background-color: #eeeeee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
