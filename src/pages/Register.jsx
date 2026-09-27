import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Field, FieldError, FieldLabel } from '../components/ui/field';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import api from '../api/axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
    name: z.string().min(5,"Name must be atleast 5 characters").trim(),
    email:z.string().email().min(8, "Email must be atleast 8 characters").trim(),
    password:z.string().min(8 ,"Must be atleast 8 characters").trim(),
    confirmPassword:z.string().min(8 ,"Must be atleast 8 characters").trim(),


}).refine((data) => data.password === data.confirmPassword,{

    message:"Password do not match",
    path: ["confirmPassword"]
});

const Register = () => {

  const navigate = useNavigate();

    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email:"",
      password:"",
      confirmPassword:""
    },
  })
   
  const onSubmit = async (data) =>{

      console.log(data);

      const { confirmPassword, ...newData} =data;

      try {

        const response = await  api.post("/auth/register", newData);

        if(response.status ===201){

          toast.success("Account created successfully");
          navigate("/login");

        }else
          toast.error(response.message || "Registration failed");

      } catch (error) {
        console.log(error.response?.data);
        toast.error(error.response?.data?.message || "Some error occurred");
      }

  }



  return (
      <form   className="mt-10 flex items-center justify-center"
      onSubmit={form.handleSubmit(onSubmit)}>

        <Card className= {"w-1/4"} >
            <CardHeader>
                <CardTitle>Register to Wanderwise</CardTitle>
                <CardDescription>Enter your credentials to continue.</CardDescription>
                <CardAction>
                    <img className="w-18" src="wanderwiseLogo.png" alt="wander-wise logo"></img>
                </CardAction>
            </CardHeader>

            <CardContent className="space-y-4">
                <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
         placeholder="krish biswas"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
    
    
     <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        placeholder="abc@"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

   

       <Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>enter your password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        placeholder="********"
        
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

      <Controller
  name="confirmPassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>confirm your password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        placeholder="******"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
            </CardContent>
  <CardFooter className="flex items-center justify-center text-center py-3 "> 
    <Button type="submit">Register</Button>
  </CardFooter>

        </Card>

      </form>
  )
}

export default Register