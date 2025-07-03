import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
import Social from '@/components/auth/social'
import { Card } from '@/components/ui/card'
import { useAuthState } from '@/stores/auth.store'

const Auth = () => {
	const { authType } = useAuthState()  // <-- 🔁 to‘g‘ri nom
	return (
		<div className='w-full h-screen bg-gradient-to-t from-foreground to-background flex items-center justify-center'>
			<Card className='p-8 w-1/3 relative'>
				{authType === 'register' && <Register />}
				{authType === 'login' && <Login />}
				<Social />
			</Card>
		</div>
	)
}

export default Auth
