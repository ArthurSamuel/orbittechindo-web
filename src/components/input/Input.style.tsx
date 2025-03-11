import styled from "@emotion/styled";

export const InputText = styled.input`
  border: 1px solid #dedede;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? "#dedede" : "#faf7f7")};
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const InputDateContainer = styled.div`
  position: relative;
`;

export const InputDate = styled.input`
  border: 1px solid #dedede;
  height: 40px;
  border-radius: 10px;
  //background-color: ${(props) => (props.disabled ? "#dedede" : "#faf7f7")};
  background-color: #faf7f7;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 0;
  }

  &::-moz-calendar-picker-indicator {
    display: none;
  }
`;

export const InputDateOpener = styled.div`
  border-radius: 10px;
  width: 100px;
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  cursor: pointer;
`;

export const InputTextArea = styled.textarea`
  border: 1px solid #dedede;
  border-radius: 10px;
  background-color: #faf7f7;
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export const InputSelectContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const InputSelectBody = styled.div`
  border: 1px solid #dedede;
  height: 40px;
  border-radius: 10px;
  background-color: #faf7f7;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSelectContainerOptions = styled.div<{ show: boolean }>`
  width: 100%;
  background-color: rgb(231 229 229);
  border-radius: 10px;
  padding: 7px;
  margin-top: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  z-index: 99999;
  display: ${(props) => (props.show ? "inherit" : "none")};
  height: ${(props) => (props.show ? "auto" : "0px")};
`;

export const InputSelectValueOption = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dad3d3;
    border-radius: 10px;
  }
`;

export const AutocompleteContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const AutocompleteInput = styled.input`
  border: 1px solid #dedede;
  height: 40px;
  border-radius: 10px;
  background-color: #faf7f7;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AutocompleteSuggestBody = styled.div<{ show: boolean }>`
  width: 100%;
  background-color: rgb(231 229 229);
  border-radius: 10px;
  padding: 5px;
  margin-top: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  z-index: 99999;
  display: ${(props) => (props.show ? "inherit" : "none")};
  height: ${(props) => (props.show ? "auto" : "0px")};
`;

export const AutocompleteValue = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dad3d3;
    border-radius: 10px;
  }
`;
