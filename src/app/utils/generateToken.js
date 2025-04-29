import jwt from 'jsonwebtoken';
import { users } from '../Database/db.js';
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';
const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = '7d';

export const generateAccessAndRefreshTokens = (userId) => {
  try {
    // Find the user from the local array
    const user = users.find(u => u._id === userId);
console.log("user in generate token",user)
    if (!user) {
        alert('user does not match. Please try again.');
        return;
    }

    // Generate tokens
    const accessToken = jwt.sign(
      { _id: user._id, email: user.email },
      JWT_SECRET_KEY,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
      { _id: user._id, email: user.email },
      JWT_SECRET_KEY,
      { expiresIn: REFRESH_TOKEN_EXPIRY }
    );

    // Optional: If you want to mock storing the refreshToken, you could add it temporarily
    // But since there’s no DB, this will not persist
    user.refreshTokken = refreshToken;

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Token generation error:", error);
    // throw new ApiError(500, "Something went wrong while generating refresh and access token");
  }
};
