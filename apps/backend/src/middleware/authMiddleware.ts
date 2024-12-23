import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: "Unauthorized: No token provided" });
    return;
  }

  try {
    if (token !== "valid-token") {
      throw new Error("Invalid token");
    }
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
