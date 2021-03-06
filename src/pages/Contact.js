import React from 'react';
 import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';

 import '../css/contact.css'
 
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
     <section className="subscribeWrapper">
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

           <MyCheckbox name="acceptedTerms" className="checkboxSubscribe">
             I accept the terms and conditions
           </MyCheckbox>
 
           <button type="submit">Subscribe</button>
         </Form>
       </Formik>
     </section>
     <section className="subscribeDescribe my-5">
         <div className="describe">
         <h3>Lorem ipsum</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti similique ipsam! Officiis totam porro placeat voluptas ratione, pariatur mollitia consequuntur voluptatem ex ducimus odio impedit, facere magni inventore facilis quidem, minus provident autem? Voluptatibus recusandae nostrum quod culpa iste eaque animi eveniet, quas repellat molestias quibusdam quisquam corrupti reiciendis adipisci quia ut aperiam eius vel, blanditiis voluptas numquam dolor!</p>
         </div>
         <div className="contactData">
             <h3>Lorem ipsum</h3>
             <p>Email: asdasd@ads.com</p>
             <p>Phone: +44 444 444 444</p>
         </div>
     </section>
     </>
   );
 };

 export default Contact;