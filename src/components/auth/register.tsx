import { useAuthState } from "@/stores/auth.store";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Register = () => {
    const { setAuth } = useAuthState();

    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold">Register</h2>
            <p className="text-muted-foreground">
                Already have an account?{''}
                <span className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setAuth('login')} >
                    Sing up
                </span>
            </p>
            <Separator className="my-3" />
            <div>
                <span>Email</span>
                <Input placeholder='example@gmail.com' />
            </div>
            <div className="mt-2">
                <span>Password</span>
                <Input placeholder='********' type='password' />
            </div>
            <Button className="w-full h-12 mt-2">Login</Button>
        </div>
    )
}
export default Register;