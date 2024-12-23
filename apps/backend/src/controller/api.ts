import type { NextFunction, Request, Response } from "express";
import { fetchUser, updateUser } from "../repository/userCollection";

export const fetchUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const userId = req.params.id;

  if (!userId) {
    res.status(400).json({ error: "Missing required parameters" });
    return;
  }

  try {
    const user = await fetchUser(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch user data", error });
  }
};

export const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const userId = req.params.id;
  const userData = req.body;

  if (!userId || !userData) {
    res.status(400).json({ error: "Missing required parameters" });
    return;
  }

  try {
    await updateUser(userId, userData);
    res.status(200).json({ message: "User data updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update user data" });
  }
};
