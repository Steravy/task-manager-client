import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { HiOutlinePlus } from "react-icons/hi2";
import Textfield from '../components/text-field';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 3,
    borderRadius: '.3rem',

};

export default function CreateTask() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const INITIAL_FORM_STATE = {
        title: title,
        description: description,
    }

    const FORM_VALIDATION_SCHEMA = Yup.object().shape({
        title: Yup.string()
            .required('Required'),
        description: Yup.string()
            .required('Required'),
    })




    return (
        <>
            <Button onClick={handleOpen}>
                {<HiOutlinePlus style={{ color: '#000', fontSize: '1.9rem', borderRadius: '1rem' }} />}
                {/* <Fab size="small" color="dark" aria-label="add">
                    <AddIcon />
                </Fab> */}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Formik

                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION_SCHEMA}
                    enableReinitialize
                    onSubmit={(values, onSubmitProps) => {
                        console.log(values);
                        onSubmitProps.resetForm();
                    }}

                >

                    <Form>

                        <Grid container sx={style} >

                            <Grid item xs={12}>
                                <Textfield name='title' placeholder='Title...' label='Title' />
                            </Grid>

                            <Grid item xs={12} mt={3}>
                                <Textfield name='description' placeholder='Description...' label='Description' />
                            </Grid>

                            <Grid item xs={12} mt={4} textAlign={'end'}>

                                <Button sx={{ color: '#000', borderColor: '#000', borderRadius: '4px', ":hover": { backgroundColor: '#000', color: '#fff', borderColor: '#000' } }} variant="outlined" size='small' type="submit">
                                    Save
                                </Button>

                            </Grid>

                        </Grid>

                    </Form>

                </Formik>

            </Modal>
        </>
    );
}