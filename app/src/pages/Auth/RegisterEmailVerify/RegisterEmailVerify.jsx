import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Container, useToast, Spinner } from '@chakra-ui/react'
import { MdOutlineMessage } from "react-icons/md";
import { useMutation, useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { sendVerificationMail } from '../../../api/query/userQuery';
import { useEffect } from 'react';



const RegisterEmailVerify = () => {
  const toast = useToast();
  const {email} = useParams();
  // const email = location.state?.email ?? "";

  console.log(location)
  if(email === "") {
    return <Center h='100vh'>Invalid Email</Center>
  }


  const { mutate, isSuccess, isLoading } = useMutation({
      mutationKey: ["send-verification-mail"], 
      mutationFn: sendVerificationMail,
      onSettled: (data) => {
          console.log(data)
      },
      onError: (error) => {
          toast({
              title: "Signup Error",
              description: error.message,
              status: "error",
          })
      },
      enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);


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
            <Icon as={MdOutlineMessage  } boxSize='6' color='p.purple' />
            <Text textStyle='h4' fontWeight='medium' color='p.black'>Email Verification</Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
                We have sent you an email verification to {""}
                <Box as='b' color='black'>{email}</Box> If you don't receice it, click the button below.
                </Text> 
                <Button 
                w='full' 
                variant='outline'
                onClick={()=> {
                  mutate({email});
                }}
                isLoading={isLoading}
                >Re-Send Email</Button>
        </VStack>
    </Card>
          
    </Center>
    </Container>
  );
};

export default RegisterEmailVerify