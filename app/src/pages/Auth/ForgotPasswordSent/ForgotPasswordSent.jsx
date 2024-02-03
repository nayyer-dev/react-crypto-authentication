import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Container } from '@chakra-ui/react'
import { FaRegCheckCircle } from "react-icons/fa";



const ForgotPasswordSent = () => {
  return (
    <Container>
        <Center minH='100vh'>
        <Card
        p={{
            base: '4',
            md: '10',
        }}
        showCard={true}
        >
        <VStack spacing={6}>
        <Icon as={ FaRegCheckCircle  } boxSize='6' color='green' />
            <Text textStyle='h4' fontWeight='medium' color='p.black'>Successful Sent</Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
                We have sent instruction on how to reset your password to {""}
                <Box as='b' color='black'> 
                jenny.wilson@gmail.com. 
                </Box>{""}
                Please follow the instruction from the email. We have sent you an email verrification to {""}
                </Text> 
        </VStack>
    </Card>
    </Center>
    </Container>
  );
};

export default ForgotPasswordSent