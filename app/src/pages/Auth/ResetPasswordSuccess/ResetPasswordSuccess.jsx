import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Container } from '@chakra-ui/react'
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ResetPasswordSuccess = () => {
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
            <Text textStyle='h4' fontWeight='medium' color='p.black'>Password Reset Done</Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
                Now you can access your account.
                </Text> 
                <Box w='full'>
                    <Link to='/signin'>
                    <Button w='full'>Signin</Button>
                    </Link>
                </Box>
        </VStack>
    </Card>
    </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;