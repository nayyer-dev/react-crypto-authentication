import { Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, Stack, Text, Box, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import { object, string, ref } from 'yup';
import Card from '../../../components/Card';
import { signinUser } from '../../../api/query/userQuery';
import { useMutation } from 'react-query'


const signinValidationSchema = object ({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "password must be atleast 6 characters").required("Password is required"),
});

const Signin = () => {
    const toast = useToast();
    const { mutate, isLoading } = useMutation({
        mutationKey: ["signin"], 
        mutationFn: signinUser,
        onSuccess: (data) => {},
        onError: (error) => {
            toast({
                title: "Signin Error",
                description: error.message,
                status: "error",
            })
        },
    });




        return (
    <Container bg='white'>
        <Center minH='100vh'>
            <Card>
                <Text fontWeight='medium' textStyle='h1'>Welcome to Crypto App</Text>
                <Text mt='3' color='black.60' textStyle='p2'>Enter your credentials to access the account</Text>
                <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}

                onSubmit={(values) => {
                    // console.log(values)
                    mutate(values);

                    // mutate({
                    //     email: values.email,
                    //     password: values.password,
                    // })  aise bhi kr skte h or mutate(values) se bhi kr skte h.


                }}
                validationSchema={signinValidationSchema}
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
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    </Field>

                    <Field name='password'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input 
                        {...field} 
                        name='password'
                        type='password'
                        placeholder='Enter your password...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    </Field>

                    
                    <HStack justify='space-between'>
                    <Checkbox>
                        <Text textStyle='p3'>Remember me</Text>
                    </Checkbox>
                    
                        <Link to='/forgot-password'>
                            <Text textStyle='p3' as='span' color='p.purple'>
                                Forgot Password
                            </Text>
                        </Link>
                    
                    </HStack>
                    <Box>
                    <Button isLoading={isLoading} w='full' type='submit'>Login</Button>
                    <Link to='/signup'>
                        <Button variant='outline' mt='3' w='full'>Create Account</Button>
                    </Link>
                    </Box>
                    
                </Stack>
            </Form>
            )}
            
                </Formik>
            </Card>
        </Center>
    </Container>
  )
}

export default Signin;