import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userPostController = async (req, res) => {
  try {
    const { name, password, telephone } = req.body;
    if (!name || !password || !telephone) {
      return res.status(400).json({ message: "Please fill all forms." });
    }

    console.log(name, password, telephone);

    try {
      const user = await prisma.user.create({
        data: { name, password, telephone },
      });
  
      return res
        .status(201)
        .json({ message: "User created successfully", data: user });
      
    } catch (error) {
      console.log(error);
    }

    
  } catch (error) {
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const userGetController = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user" });
  }
};
