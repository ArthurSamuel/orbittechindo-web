/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Skeleton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useRef, useState } from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  InputDate,
  InputDateContainer,
  InputDateOpener,
  InputSelectBody,
  InputSelectContainer,
  InputSelectContainerOptions,
  InputSelectValueOption,
  InputText,
} from "./Input.style";

export interface IOptions {
  text: string;
  value: any;
}

const Input = () => {};

// This will be wrapper of React Form Component
interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  render(
    field: ControllerRenderProps<T, Path<T>>,
    fieldState: ControllerFieldState
  ): React.ReactElement | React.ReactElement[];
}

Input.Controller = <T extends FieldValues>({
  control,
  name,
  rules,
  render,
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <React.Fragment>{render(field, fieldState)}</React.Fragment>
      )}
    />
  );
};

Input.Text = ({
  disable,
  type,
  value,
  label,
  placeholder,
  isFetching,
  error,
  onChange,
}: {
  disable?: boolean;
  type?: string;
  value?: any;
  label: string;
  isFetching?: boolean;
  error?: any;
  placeholder?: string;
  onChange?(value: string): void;
}) => {
  return (
    <Box width={"100%"}>
      <Box mb={0.5}>
        <Typography variant="body2">{label}</Typography>
      </Box>
      {!isFetching ? (
        <InputText
          disabled={disable}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          onWheel={(e: any) => e.target.blur()}
        />
      ) : (
        <Skeleton style={{ height: 40 }} animation="wave" />
      )}
      {error && (
        <Box ml={1}>
          <Typography color={"red"} variant="caption">
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

Input.Select = ({
  label,
  options,
  value,
  isFetching,
  error,
  onChange,
}: {
  label: string;
  options: IOptions[];
  value: any;
  isFetching?: boolean;
  error?: any;
  onChange(item: IOptions): void;
}) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>();
  const shouldShowOptionsRef = useRef(showOption);

  function handleClose() {
    if (shouldShowOptionsRef.current) {
      setShowOption(false);
    }
  }

  const handleOnChange = (item: IOptions) => {
    setSelectedValue(item.text);
    setShowOption(false);
    onChange(item);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  useEffect(() => {
    shouldShowOptionsRef.current = showOption;
  }, [showOption]);

  useEffect(() => {
    if (value && options.length > 0) {
      let targetValue = value;
      if (typeof value === "object") {
        targetValue = value.value;
      }
      const target = options.find((item) => item.value === targetValue);
      if (target) {
        setSelectedValue(target.text);
      }
    }
  }, [isFetching, value, options]);

  return (
    <Box position={"relative"} onClick={(e) => e.stopPropagation()}>
      <InputSelectContainer onClick={() => setShowOption(true)}>
        {!isFetching && (
          <Box position={"absolute"} top={"50%"} right={"2%"}>
            <ExpandMoreIcon />
          </Box>
        )}
        <Box mb={0.5}>
          <Typography variant="body2">{label}</Typography>
        </Box>
        {!isFetching && options.length > 0 ? (
          <InputSelectBody>
            <Box>{selectedValue}</Box>
          </InputSelectBody>
        ) : (
          <Skeleton style={{ height: 40 }} animation="wave" />
        )}
      </InputSelectContainer>
      <InputSelectContainerOptions show={showOption}>
        {options.map((item, index) => {
          return (
            <InputSelectValueOption
              key={index}
              onClick={() => handleOnChange(item)}
            >
              {item.text}
            </InputSelectValueOption>
          );
        })}
      </InputSelectContainerOptions>
      {error && (
        <Box ml={1}>
          <Typography color={"red"} variant="caption">
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

Input.Date = ({
  value,
  label,
  isFetching,
  error,
  onChange,
}: {
  value?: any;
  label: string;
  isFetching?: boolean;
  error?: any;
  onChange?(value: string): void;
}) => {
  const ref = useRef<any>(null);

  const handleOpenInputDate = () => {
    if (ref.current) {
      ref.current.showPicker();
    }
  };

  return (
    <Box width={"100%"}>
      <Box mb={0.5}>
        <Typography variant="body2">{label}</Typography>
      </Box>
      {!isFetching ? (
        <InputDateContainer>
          <InputDate
            ref={ref}
            type="date"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
          <InputDateOpener>
            <CalendarMonthIcon onClick={handleOpenInputDate} />
          </InputDateOpener>
        </InputDateContainer>
      ) : (
        <Skeleton style={{ height: 40 }} animation="wave" />
      )}
      {error && (
        <Box ml={1}>
          <Typography color={"red"} variant="caption">
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Input;
