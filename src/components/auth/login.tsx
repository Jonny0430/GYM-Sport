
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { z } from "zod";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useAuthState } from "@/stores/auth.store";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { auth } from "@/firebase";
import { useNavigate } from "react-router";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { LuTriangleAlert } from "react-icons/lu";
import Fill from "../shared/fill-loading";
import FillLoading from "../shared/fill-loading";


const Login = () => {

    const { setAuth } = useAuthState();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { setUser } = useAuthState()
    const navigate = useNavigate()

        const form = useForm<z.infer<typeof loginSchema>>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        });
    
    
        const onSubmit = async (values: z.infer<typeof loginSchema>) => {         
            const { email, password } = values;
            console.log('Form values:', values);
            setIsLoading(true);
		try {
			const res = await createUserWithEmailAndPassword (auth, email, password)
            setUser(res.user)
            console.log('User created:', res.user);
            res.user
            setAuth('dashboard')
			navigate('/')
		}catch (error) {
			const result = error as Error
			setError(result.message)
	} finally {
		setIsLoading(false)
		}
    };
        
    

        return (
            <div className="flex flex-col">
                {!isLoading && <FillLoading />}
                <h2 className="text-xl font-bold">Login</h2>
                <p className="text-muted-foreground">
                    Already have an account?{' '}
                    <span
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => setAuth('register')}
                    >
                        Sign up
                    </span>
                </p>
                <Separator className="my-3" />
                {error && (
                    <Alert variant="destructive">
                    <LuTriangleAlert className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                )}
                
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@example.com" disabled={isLoading} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="*******" type='password' disabled={isLoading} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                        <Button type="submit" className="h-12 w-full mt-2" disabled={isLoading}>
                            Submit
                        </Button>
                        </div>
                    </form>
                </Form>
            </div>
        )
    }
        
export default Login;

