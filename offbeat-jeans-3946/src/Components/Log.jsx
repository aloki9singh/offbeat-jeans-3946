import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useState, useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import {
  loginFailureAction,
  loginSuccessAction,
  loginLoadingAction,
} from "../Context/AuthContext/action.js";
import { AuthContext } from "../Context/AuthContext/AuthContext.jsx";

export function Log() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { state, dispatch } = useContext(AuthContext);
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
  const navigate =useNavigate()
  const handleLogout=()=>{
    dispatch(loginFailureAction());
  }
  const handleAdmin=()=>{
   navigate("/admin")
  }
  if (state.isAuth) {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Text onClick={onOpen} fontSize={13} ml={4} ref={finalRef}>
              Hi,Alok
              <br />
              INSIDER 0 pts
            </Text>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                <HStack>
                  <Image
                    w={9}
                    src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                  />
                 <Text> Good morning ,ALOK</Text>
                </HStack>
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>

              <Text box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={onOpen} fontSize={13} m={4} ref={finalRef}>
              INSIDER 0 pts
              <br />
             See your loyality program savings, benefits, rewards
            </Text>
              </PopoverBody>
              <PopoverFooter>
                {" "}
                <Button colorScheme="blue"  onClick={handleLogout}>Sign Out</Button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </>
    );
  } else {
    return (
      <>
        {/* <Button >Open Modal</Button> */}
        {/* <Button >
            I'll receive focus on close
          </Button> */}
        <Text onClick={onOpen} fontSize={13} ml={4} ref={finalRef}>
          Sign In
          <br />
          for FREE Shipping
        </Text>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          p={10}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>
                  Sign in or create an account to enjoy FREE standard shipping
                  on all orders.
                </FormLabel>

                <Input
                  mt={6}
                  ref={initialRef}
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={loginDetails.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                {/* <FormLabel>Last name</FormLabel> */}
                <Input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={loginDetails.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                onClick={handleLogin}
                // isloading={state.isLoading}
                bg="black"
                color="white"
                mt={10}
                w={40}
                borderRadius={50}
              >
                Sign In
              </Button>
     
              <Button ml={20}
                onClick={handleAdmin}
                // isloading={state.isLoading}
                bg="black"
                color="white"
                mt={10}
                w={40}
                borderRadius={50}
              >
                Admin Sign In
              </Button>

              <VStack>
                <Divider my={6} />

                <FormLabel >
                  <b>New to Sephora?</b>
                </FormLabel>
                <Button
                  onClick={handleLogin}
                  isloading={state.isLoading}
                  bg="white"
                  color="black"
                  border="1px solid black"
                  borderRadius={50}
                >
                  Create Account
                </Button>
              </VStack>
            </ModalBody>

            <ModalFooter>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
