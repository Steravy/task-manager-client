import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Textfield from '../components/text-field';
import { Link } from 'react-router-dom';

function Register() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const INITIAL_FORM_STATE = {
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
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
        confirmPassword: Yup
            .string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                                <Typography fontFamily={'Poppins'} variant={'h5'}>Register</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Textfield name="userName" autoComplete="off" label="User name" />
                            </Grid>

                            <Grid item xs={12} mt={'1.1rem'}>
                                <Textfield name="password" label="Password" type="password" />
                            </Grid>

                            <Grid item xs={12} mt={'1.1rem'}>
                                <Textfield name="confirmPassword" label="Confirm password" type="password" />
                            </Grid>

                            <Grid item xs={12} my={'2.4rem'} textAlign={'end'}>
                                <Button sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '4px', ":hover": { backgroundColor: '#123', color: '#fff' } }} variant="contained" size='small' type="submit">Sign Up</Button>
                            </Grid>

                            <Grid item xs={12} textAlign={'start'}>
                                <Typography fontSize={'0.8rem'} fontFamily={'Poppins'} >Don`t have an account? Sign up In here</Typography>
                            </Grid>

                        </Grid>

                    </Form>

                </Formik>

            </Grid>


        </Grid>
    )
}

export default Register;