import { Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import { object, string, ref } from 'yup';
import Card from '../../../components/Card';
import { useMutation } from 'react-query';
import { signupUser } from '../../../api/query/userQuery';


const signupValidationSchema = object ({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "password must be atleast 6 characters").required("Password is required"),
    repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat password is required"),
});

const Signup = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const toast = useToast();
    const { mutate, isLoading } = useMutation({
        mutationKey: ["signup"], 
        mutationFn: signupUser,
        onSuccess: (data) => {
            console.log(email)
            if (email) {
                navigate(`/register-email-verify/${email}`)
        }
    },
        onError: (error) => {
            toast({
                title: "Signup Error",
                description: error.message,
                status: "error",
            })
        },
    });
  return (
    <Container>
        <Center minH='100vh'>
            <Card>
                <Text fontWeight='medium' textStyle='h1'>Welcome to Crypto App</Text>
                <Text mt='3' color='black.60' textStyle='p2'>Create a free account by filling data below.</Text>
                <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}

                onSubmit={(values) => {
                    // console.log(values)
                    setEmail(values.email);
                    mutate({
                        firstName: values.name,
                        lastName: values.surname,
                        email: values.email,
                        password: values.password,
                    });
                }}
                validationSchema={signupValidationSchema}
                >
                    {() => (
                    <Form>
                <Stack mt='10' spacing ={5}>
                        <Flex gap='4'>
                    {/* <Field name='name'>
                    {({ field, meta}) => {
                        console.log(meta)
                        return(
                        <FormControl inInvalid={!! (meta.error && meta.touched)}>
                        <FormLabel htmlfor='name'>Name</FormLabel>
                        <Input 
                        {...field} 
                        name='name' 
                        placeholder='Enter your name...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}} */}

                    <Field name='name'>
                    {({ field, meta }) => (
                     
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>

                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input 
                        {...field} 
                        name='name' 
                        placeholder='Enter your name...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    </Field>

                    <Field name='surname'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='surname'>Surname</FormLabel>
                        <Input 
                        {...field} 
                        name='surname' 
                        placeholder='Enter your Surname...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    
                    </Field>
                    </Flex>
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

                    <Field name='repeatPassword'>
                    {({ field, meta}) => (
                        
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='repeatPassword'>Repeat Password</FormLabel>
                        <Input 
                        {...field} 
                        name='repeatPassword'
                        type='repeatPassword'
                        placeholder='Enter your repeatPassword...' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                    </Field>
                    <Checkbox>
                        <Text textStyle='p3'>
                        I agree with {''} 
                        <Text as='span' color='p.purple'>
                            Terms and condition
                        </Text>
                        </Text>
                    </Checkbox>
                    <Button isLoading={isLoading} type='submit'>Create Account</Button>
                    <Text textStyle='p3' color='black.60' textAlign='center'>
                        Already have an account? <Link to='/signin'>
                            <Text as='span' color='p.purple'>
                                Login
                            </Text>
                            </Link>
                    </Text>
                </Stack>
            </Form>
            )}
            
                </Formik>
            </Card>
        </Center>
    </Container>
  )
}

export default Signup