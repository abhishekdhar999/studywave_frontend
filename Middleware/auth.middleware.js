import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';
import { users } from "../src/app/Database/db.js"; // Adjust path as needed
// import ApiError from './ApiError.js'; // Replace with your error handler if different

export const verifyJwt = async (req, res, next) => {
  try {
    const authToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!authToken) {
      throw new ApiError(401, "Authorization failed: No token provided");
    }

    // Verify JWT
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    console.log("Decoded token:", decodedToken);

    // Find user in the local `users` array
    const user = users.find(u => u._id === decodedToken._id);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    // Remove sensitive info like password before attaching
    const { password, ...safeUser } = user;

    req.user = safeUser;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
