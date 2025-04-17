'use server'
import { signIn } from "@/auth";
export const SignInCredentials = async (formdata: FormData) => {
    try {
        const email = formdata.get('email');
        console.log(email);
        
        const password = formdata.get('password')
        console.log(password);
       
        let response = await signIn('credentials', {
            email,
            password,
            redirect: false
        });
        if (response?.error) {
            throw new Error(response.error);
        }
        return { status: 'success' ,message:'Please verify your email before logging in.'  }
    } catch (error) {
        console.log('error found', error);
        return { status: 'failed', error: (error as Error).message }
    }
}