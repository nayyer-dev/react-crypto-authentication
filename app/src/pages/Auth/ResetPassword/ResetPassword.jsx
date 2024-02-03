import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Stack, FormControl, FormLabel, Input, Container, FormErrorMessage } from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik'
import { object, string, ref } from 'yup'




const ResetPassword = () => {
    const resetValidationSchema = object ({
        password: string().min(6, "password must be atleast 6 characters").required("Password is required"),
    repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat password is required"),
});
  return (
   <Container>
     <Center minH='100vh'>
        <Card>
           
                <Text fontWeight='medium' textStyle='h1'>Reset Password</Text>
                <Text mt='3' color='black.60' textStyle='p2'>Enter your password</Text>
                <Formik
                initialValues={{
                    password: "",
                    repeatPassword: "",
                }}

                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={resetValidationSchema}
                >
                    {() => (
                    <Form>
                <Stack mt='10' spacing ={5}>
                    
                <Field name='password'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='password'>New Password</FormLabel>
                        <Input 
                        {...field} 
                        name='password'
                        type='password'
                        placeholder='Enter your password...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    </Field>

                    <Field name='repeatPassword'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='repeatPassword'>New Repeat Password</FormLabel>
                        <Input 
                        {...field} 
                        name='repeatPassword'
                        type='repeatPassword'
                        placeholder='Enter your repeatPassword...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
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

export default ResetPassword