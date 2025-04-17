// src/actions.ts
"use server";

import { connectDB } from "@/db/connection";
import Users from "@/db/model/user";

export async function verifyUser(id: string) {
  try {
    await connectDB();
    const user = await Users.findByIdAndUpdate(id, { verified: true });
    console.log("User after verification:", user);
    return { success: true, message: "User verified successfully" };
  } catch (error) {
    console.error("Verification error:", error);
    return { success: false, message: "Failed to verify user" };
  }
}
