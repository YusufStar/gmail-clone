import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail__close' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='To' type="text" {...register("to", {required: true})} />

            {errors.to && <p className='sendMail__error'>To is Required!</p>}

            <input placeholder='Subject' type="text" {...register("subject", {required: true})} />

            {errors.subject && (
            <p className='sendMail__error'>subject is Required!</p>
            )}
            
            <input placeholder='Message...' type="text" className='sendMail__message' {...register("message", {required: true})} />

            {errors.message && (
            <p className='sendMail__error'>message is Required!</p>
            )}

                <div className='sendMail__options'>
                    <Button className='sendMail__send'
                    variant='contained'
                    color='primary'
                    type='submit'>
                      Send
                    </Button>
                </div>
        </form>
    </div>
  );
}

export default SendMail;