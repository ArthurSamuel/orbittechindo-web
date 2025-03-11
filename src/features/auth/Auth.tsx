import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import { useStoreAuthUser } from "../../store/AuthStore";
import { useNavigate, useSearchParams } from "react-router";
import { useCallback } from "react";
import { useStoreJwtToken } from "../../store/JwtToken";
import { useToast } from "../../store/ToastStore";

interface Form {
  email: string;
  password: string;
}

export default function Auth() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const { show } = useToast();
  const flow = useCallback(() => {
    return searchParam.get("flow");
  }, [searchParam]);
  const { append, find } = useStoreAuthUser();
  const { setToken } = useStoreJwtToken();
  const { control, handleSubmit, setError } = useForm<Form>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<Form> = (data) => {
    if (flow() !== null) {
      if (!append({ email: data.email, password: data.password })) {
        setError("email", {
          message: "User already exists",
        });
      } else {
        show("User Added");
        navigate("/auth");
      }
    } else {
      if (find(data.email)) {
        // Simulate JWT Token
        const rnd = Math.random() * 10;
        setToken(rnd.toString());
        navigate("/");
      } else {
        show("Please Check your credential", "error");
      }
    }
  };

  return (
    <Box
      display={"flex"}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box border={"1px solid #dedede"} p={1} width={450}>
          <Box>
            <Input.Controller
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                //   message: "Invalid email address",
                // },
              }}
              render={(field, fieldState) => (
                <Input.Text
                  label="Email"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Box>
          <Box mt={2}>
            <Input.Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                // pattern:
                //   flow() !== null
                //     ? {
                //         value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                //         message: "Password must include letters and numbers",
                //       }
                //     : undefined,
                // minLength:
                //   flow() !== null
                //     ? {
                //         value: 8,
                //         message: "Password must be at least 8 characters",
                //       }
                //     : undefined,
              }}
              render={(field, fieldState) => (
                <Input.Text
                  type="password"
                  label="Password"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Box>
          <Box mt={2} display={"flex"} justifyContent={"end"} gap={1}>
            <Button type="submit" variant="contained">
              {flow() !== null ? "Register" : "Login"}
            </Button>
          </Box>
        </Box>
        <Box
          mt={1}
          display={"flex"}
          justifyContent={"end"}
          onClick={() =>
            navigate(`${flow() !== null ? "/auth" : "/auth?flow=register"}`)
          }
        >
          <Typography
            variant="body1"
            color={"blue"}
            style={{ cursor: "pointer" }}
          >
            {flow() !== null ? "Login Here" : "Create Account Here"}
          </Typography>
        </Box>
      </form>
    </Box>
  );
}
