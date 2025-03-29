import prisma from "../../lib/prisma";
import { verify_jwt } from "../../utils/handleJWT";
const getUser = async (accessToken: string) => {
  try {
    const email = await verify_jwt(accessToken);

    if (!email) {
      return { success: false, message: "Email not found in token" };
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return { success: false, message: "User not found" };
    }

    return { success: true, message:user };
  } catch (error) {
    return { success: false, message: "Invalid token or server error", error };
  }
};

export default getUser;
