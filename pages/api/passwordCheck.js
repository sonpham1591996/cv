import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler(process.env.YOUR_SECRET_PASSWORD, {
  cookieName: "next-password-protect",
});