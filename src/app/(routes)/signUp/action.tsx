'use server'
import bycript from 'bcryptjs'
import { connectDB } from '@/db/connection'
import Users from '@/db/model/user'
import transporter from '../../../../emailConfig'
export const credentialSignIn =async (formdata: FormData)=> {
    try {
        const firstName = formdata.get('firstName')
        const lastName = formdata.get('lastName')
        const email = formdata.get('email')
        const password = formdata.get('password') as string
        const name = firstName + "" + lastName;
        const hasedPassword = await bycript.hash(password, 10);
        await connectDB();
        const user = await Users.create({
            name,
            email,
            password: hasedPassword,
            provider: 'CREDENTIAL',
        });
        const mailResponse = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Verify your email',
            html: `<a href='${process.env.WEBSITE_DOMAIN}/verify/${user._id}'>Verify your email!</a>`
        });
        return { msg: "sucess" }
    } catch (error) {
        return { msg: "failed" }
    }
}
