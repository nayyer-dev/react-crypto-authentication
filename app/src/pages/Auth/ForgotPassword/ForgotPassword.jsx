import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Stack, FormControl, FormLabel, Input, Container } from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik'
import { object, string } from 'yup'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';



const ForgotPassword = () => {
    const forgotValidationSchema = object ({
        email: string().email("Email is invalid").required("Email is required"),
    });
  return (
   <Container>
     <Center minH='100vh'>
        <Card>
            <Link to='/signin'>
            <Icon as={IoIosArrowRoundBack } boxSize='6' />
            </Link>
                <Text fontWeight='medium' textStyle='h1'>Forgot Password</Text>
                <Text mt='3' color='black.60' textStyle='p2'>Enter yor email address for which account you want to reset your password</Text>
                <Formik
                initialValues={{
                    email: "",
                }}

                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={forgotValidationSchema}
                >
                    {() => (
                    <Form>
                <Stack mt='10' spacing ={5}>
                    
                    <Field name='email'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                        {...field} 
                        name='email' 
                        type='email'
                        placeholder='Enter your email...' />
                        {/* <p>{meta.error}</p> */}
                    </FormControl>
                    )}
                    </Field>
                    <Button w='full' type='submit'>Reset Password</Button>
                </Stack>
            </Form>
            )}
            
                </Formik>
            </Card>
    </Center>
   </Container>
  );
};

export default ForgotPassword