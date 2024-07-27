import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "360d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: true,
    
    sameSite: "None",
    // sameSite: "strict", // csrf
  });
};
export default createTokenAndSaveCookie;