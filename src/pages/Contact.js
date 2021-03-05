import React from 'react';
 import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';
 
 const MyTextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };
 
 const MyCheckbox = ({ children, ...props }) => {
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
     <div>
       <label className="checkbox-input">
         <input type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 const Contact = () => {
   return (
     <>
       <h1>Subscribe!</h1>
       <Formik
         initialValues={{
           firstName: '',
           email: '',
           acceptedTerms: false,
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('You must fill this field'),
           email: Yup.string()
             .email('Invalid email address')
             .required('You must fill this field'),
           acceptedTerms: Yup.boolean()
             .required('You must accept terms')
             .oneOf([true], 'You must accept the terms and conditions.'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
         <Form>
           <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="first name..."
           />
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="email..."
           />

           <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox>
 
           <button type="submit">Submit</button>
         </Form>
       </Formik>
     </>
   );
 };

 export default Contact;