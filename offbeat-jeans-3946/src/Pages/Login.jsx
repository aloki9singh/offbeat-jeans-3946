import {
  AlertDescription,
  AlertIcon,
  Alert,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
  Center,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import {
  loginFailureAction,
  loginSuccessAction,
  loginLoadingAction,
} from "../Context/AuthContext/action.js";



const Login = () => {
  const {state, dispatch} = useContext(AuthContext);
  const [loginDetails, setLoginDetals] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetals({ ...loginDetails, [name]: value });
  };
  const handleLogin = () => {
    dispatch(loginLoadingAction());
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };
  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  if (state.isError) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <Alert
          status="error"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertDescription>
            There was an error processing your request
          </AlertDescription>
        </Alert>
      </Container>
    );
  }
  const { email, password } = loginDetails;
  return (
    <Container
      width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
    >
      <VStack
        width="full"
        boxShadow="lg"
        py={{ base: 4, sm: 4, md: 4, lg: 6 }}
        my={{ base: 24, sm: 24, md: 28, lg: 40 }}
        px={{ base: 2, sm: 2, md: 4, lg: 6 }}
      >
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Center>
            <Button
              variant="outline"
              colorScheme="gray"
              mt={4}
              onClick={handleLogin}
              isloading={state.isLoading}
            >
              LOGIN
            </Button>
          </Center>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Login;
