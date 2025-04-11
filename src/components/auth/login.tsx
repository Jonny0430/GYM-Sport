import { useAuthState } from "@/stores/auth.store";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Login = () => {
    const { setAuth } = useAuthState();

    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold">Login</h2>
            <p className="text-muted-foreground">
                Don't have an account?{''}
                <span className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setAuth('register')} >
                    Sing up
                </span>
            </p>
            <Separator className="my-3" />
            <div>
                <span>Email</span>
                <Input placeholder='example@gmail.com' />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="mt-2">
                <span>Password</span>
                <Input placeholder='********' type='password' />
            </div>
            <div className="mt-2">
                <span>Confirm password</span>
                <Input placeholder='********' type='password' />
            </div>
            </div>
            <Button className="w-full h-12 mt-2">Sing up</Button>
        </div>
    )
}
export default Login;