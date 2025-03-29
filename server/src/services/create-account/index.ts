import { accountSchema, accountFormType } from "./dto";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { create_jwt } from "../../utils/handleJWT";
const handleAccountCreation = async (data: any) => {
  const result = accountSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Failed Validation",
    };
  }

  const { email, password, name } = data as accountFormType;

  const checkIfExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (checkIfExist) {
    return { success: false, message: "User already exists" };
  }

  const hash_password = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hash_password },
  });

  const token = await create_jwt({ email });
  return { success: true, message: token };
};

export default handleAccountCreation;
