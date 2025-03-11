import React, { useEffect } from "react";
import { useStoreJwtToken } from "../store/JwtToken";
import { useNavigate } from "react-router";

interface IPrivateRoute {
  children: React.ReactElement | React.ReactElement[];
}

export default function PrivateRoute({ children }: IPrivateRoute) {
  const navigate = useNavigate();
  const { getToken } = useStoreJwtToken();

  useEffect(() => {
    if (getToken() === undefined) {
      navigate("/auth");
    }
  }, [getToken, navigate]);

  return <>{children}</>;
}
