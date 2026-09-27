import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { toast } from 'sonner'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const formSchema = z.object({
  email: z.string().email().min(5, "Must be at least 5 characters").trim(),
  password: z.string().min(8, "Must be at least 8 characters").trim(),
})

const Login = () => {

  const navigate = useNavigate();

const { onLogin } = useAuth(); 

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (data) => {
    console.log(data)

    
    try {

      const response = await api.post("/auth/login",data);
 console.log(response);
    if(response.status ===200){
      toast.success("you have successfully logged in");

      console.log(response.data.token);
      
      onLogin(response.data, data);

      navigate("/dashboard");
    }else
      toast.error(response.message || "Login failed");
       
      
    } catch (error) {
      toast.error(error.message || "some error occured");
      console.log(error.message);
      
    }
  }

  return (
    <div className="w-full min-h-dvh bg-emerald-800 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg grid grid-cols-2 overflow-hidden shadow-lg">

        {/* Image side */}
        <div className="hidden md:block h-full">
          <img
            src="https://images.unsplash.com/photo-1787514375953-85843e223871?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hotel house italy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form side */}
        <div>
          <form
            className="flex items-center justify-center h-full w-full p-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Card className="h-full w-full flex flex-col justify-between border-none shadow-none">
              <CardHeader>
                <CardTitle>Register to Wanderwise</CardTitle>
                <CardDescription>Enter your credentials to continue.</CardDescription>
                <CardAction>
                  <img className="w-18" src="wanderwiseLogo.png" alt="wander-wise logo" />
                </CardAction>
              </CardHeader>

              <CardContent className="space-y-4">
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
                      <FieldLabel htmlFor={field.name}>Enter your password</FieldLabel>
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
              </CardContent>

             <CardFooter className="flex flex-col gap-3">
  <Button type="submit" className="w-full">Login</Button>

       <p className="text-sm text-center">
    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
  </p>
   </CardFooter>
            </Card>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login