import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, MenuItem, Stack, Typography } from '@mui/material';
import Textfield from '../components/text-field';
import { HiUserPlus } from "react-icons/hi2";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CreateTask from './CreateTask';

function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const Item = styled(MenuItem)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        // padding: theme.spacing(1),
        textAlign: 'start',
        // color: theme.palette.text.secondary,
    }));


    const INITIAL_FORM_STATE = {
        userName: userName,
        password: password,
    }

    const FORM_VALIDATION_SCHEMA = Yup.object().shape({

        userName: Yup.string()
            .required('Required')
            .min(6, 'user name should have at least 6 character!')
            .max(20, 'user name should not have more then 20 character!'),

        password: Yup.string()
            .required('Required')
            .min(6, 'user name should have at least 6 character!')
            .max(20, 'user name should not have more then 20 character!')
            .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'Password is too weak. Try to include uppercase and lowercase letters, special characters and numbers.'
            ),
    })

    return (

        <Grid container height={'100vh'} alignItems={'center'} justifyContent={'center'} p={'2rem'} spacing={0}>

            <Grid item >

                <Formik

                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION_SCHEMA}
                    enableReinitialize
                    onSubmit={(values, onSubmitProps) => {
                        console.log(values);
                        onSubmitProps.resetForm();
                    }}

                >
                    <Form style={{ width: '100%' }} >

                        <Grid width={390} container alignItems={'center'} p={'1.5rem'} spacing={0}>

                            <Grid item xs={12} mb={'2rem'} textAlign={'center'} >
                                <Typography fontFamily={'Poppins'} variant={'h5'}>Login</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Textfield name="userName" autoComplete="off" label="User name" />
                            </Grid>

                            <Grid item xs={12} mt={'1.1rem'}>
                                <Textfield name="password" label="Password" type="password" />
                            </Grid>

                            <Grid item xs={12} my={'2.4rem'} textAlign={'end'}>
                                <Button sx={{ color: '#000', borderColor: '#000', borderRadius: '4px', ":hover": { backgroundColor: '#000', color: '#fff', borderColor: '#000' } }} variant="outlined" size='small' type="submit">Login</Button>
                            </Grid>

                            <Grid item xs={12} textAlign={'start'}>
                                <Stack direction="row" spacing={1}>

                                    <Box>
                                        <Typography fontSize={'0.8rem'} fontFamily={'Poppins'} >Don`t have an account? Sign up In here</Typography>
                                    </Box>
                                    <Box sx={{ cursor: 'pointer' }} >
                                        {<HiUserPlus style={{ color: '#000', fontSize: '1.6rem', borderRadius: '1rem' }} />}
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} textAlign={'start'}>
                                <CreateTask />
                            </Grid>

                        </Grid>

                    </Form>

                </Formik>

            </Grid>


        </Grid>
    )
}

export default Login;