
import { auth } from "@/auth";
import { connectDB } from "@/db/connection";
import profileSchema from "@/db/model/profileSchema";
import { NextRequest, NextResponse } from "next/server"
import Users from "@/db/model/user";
export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const { name, age, mobile, skills, projects, education, links } = await req.json()
        const session = await auth()
        const email = session?.user?.email
        const user = await Users.findOne({ email });
        const id = user._id
        let username: string = "";
        let isUnique = false;
        const existing = await profileSchema.findOne({ id });
        if (existing) {
            await profileSchema.updateOne({ id }, { $set: { name, age, mobile, skills, projects, education, links} });
          } else {
      
            while (!isUnique) {
              const tempUsername =`${name}${Math.floor(10000 + Math.random() * 90000)}`;
              const exists = await profileSchema.findOne({ username: tempUsername });
              if (!exists) {
                username = tempUsername;
                isUnique = true;
              }
            }
            await profileSchema.create({
              name, age, mobile, skills, projects, education, links,
                id,
                username,
              });

            }
        // console.log(name, age, mobile, skills, projects, links, education);
        return NextResponse.json({ username, success: true });
    } catch (error) {
        return NextResponse.json({ error });
    }
}