import {
  HStack,
  VStack,
  Image,
  Box,
  Text,
  Divider,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

export const Footer = () => {
  return (
    <Box my={10} bg="black" color="White" padding={10}>
      <VStack gap={10}>
        <HStack fontSize={12} gap={10}>
          <HStack>
            <Image src="https://www.sephora.com/img/ufe/icons/find-store.svg" />
            <Text>
              <Text> Find a Store</Text>
              <Text> Choose Your Store</Text>
            </Text>
          </HStack>
          <HStack>
            <ChatBubbleOutlinedIcon />
            <Text>
              <Text> Live Beauty Help</Text>
              <Text> Chat is unavailable</Text>
            </Text>
          </HStack>

          <HStack>
            <Image src="https://www.sephora.com/img/ufe/icons/app.svg" />
            <Text>
              <Text> Get the App </Text>
              <Text> Text "APP" to 36681</Text>
            </Text>
          </HStack>
          <HStack>
            <Image src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" />
            <Text>
              <Text>
                <b>Get Sephora Text Alerts</b>
              </Text>
              <Text>Sign up Now</Text>
            </Text>
          </HStack>
          <HStack>
            <Image src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" />

            <Text>
              <Text>Sephora Credit Card Program</Text>
              <Text> Want 25% off your Sephora purchase ? DETAILS</Text>
            </Text>
          </HStack>
        </HStack>
        <Divider />
        {/* //MidFooter */}
        <HStack fontSize={12} gap={10}>
          <>
            <VStack>
              <Text fontSize={14}>
                <b>About Sephora</b>
              </Text>
              <Text>About Sephora</Text>
              <Text>Newsroom</Text>
              <Text>Careers</Text>
              <Text>Sephora Social Impact</Text>
              <Text>Supply Chain Transparency</Text>
              <Text>Affiliates</Text>
              <Text>Sephora Events</Text>
              <Text>Gift Cards</Text>
              <Text>Sephora Global Sites</Text>
              <Text>Diversity and Inclusion</Text>
              <Text>Checkout on Instagram</Text>
              <Text>Sephora Accelerate</Text>
              <Text>Report a Vulnerability</Text>
            </VStack>

            <VStack>
              <Text fontSize={14}>
                <b>My Sephora</b>
              </Text>
              <Text>Beauty Insider</Text>
              <Text>Sephora Credit Card</Text>
              <Text>Community Profile</Text>
              <Text>Order Status</Text>
              <Text>Purchase History</Text>
              <Text>Account Settings</Text>
              <Text>Beauty Advisor Recommendations</Text>
              <Text>Beauty Offers</Text>
              <Text>Quizzes & Buying Guides</Text>
              <Text>Rewards Bazaar</Text>
              <Text>Loves</Text>
              <Text>Book a Reservation</Text>
            </VStack>

            <VStack>
              <Text fontSize={14}>
                <b>Help</b>
              </Text>
              <Text>Customer Service</Text>
              <Text>Returns & Exchanges</Text>
              <Text>Delivery and Pickup Options</Text>
              <Text>Shipping</Text>
              <Text>Billing</Text>
              <Text>International Shipments</Text>
              <Text>Beauty Services FAQ</Text>
              <Text>Sephora at Kohl's</Text>
              <Text>Sephora Inside JCPenney</Text>
              <Text>Store Locations</Text>
              <Text>Online Ordering</Text>
              <Text>Klarna & Afterpay</Text>
              <Text>Accessibility</Text>
            </VStack>
          </>
          <>
            <VStack>
              <Text fontSize={14}>
                <b>Region & Language</b>
              </Text>
              <HStack>
                <Image src="https://www.sephora.com/img/ufe/flags/us.svg" />
                <Text>United States - English</Text>
              </HStack>

              <HStack>
                <Image src="https://www.sephora.com/img/ufe/flags/ca.svg" />
                <Text>Canada - English</Text>
              </HStack>
              <HStack>
                <Image src="https://www.sephora.com/img/ufe/flags/ca.svg" />
                <Text>Canada - Français</Text>
              </HStack>
            </VStack>
            <VStack gap={20}>
              <Heading fontSize={30}>
                We Belong to Something
                <br /> Beautiful
              </Heading>
              <VStack>
                <Text fontSize={14}>Sign up for Sephora Emails</Text>
                <HStack>
                  <Input
                    borderRadius={20}
                    bg="white"
                    color="grey"
                    placeholder="Enter your email address"
                  />
                  <Button borderRadius={50} bg="black" border="2px solid white">
                    Sign Up
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </>
        </HStack>
        <Divider />
        <HStack gap={580}>
          <Box>
            <VStack fontSize={12}>
              <Text>© 2022 Sephora USA, Inc. All rights reserved.</Text>
              <HStack gap={2}>
                <Text> Privacy Policy</Text>
                <Text>Terms of Use </Text>
                <Text> Accessibility</Text>
                <Text>Sitemap</Text>
                <Text>Your Privacy Choices</Text>
              </HStack>
              <HStack>
                <Text>1-877-737-4672 TTY:</Text>
                <Text> 1-888-866-9845</Text>
              </HStack>
            </VStack>
          </Box>
          <Box>
            <HStack gap={2}>
              <Image  w="40px" src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" />
              <Image w="40px" src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};
