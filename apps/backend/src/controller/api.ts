import { Request, Response } from "express";
import { fetchUser, updateUser } from "../repository/userCollection";

export const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const user = await fetchUser(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData = req.body;

  if (!userId || !userData) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    await updateUser(userId, userData);
    res.status(200).json({ message: "User data updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update user data" });
  }
};
