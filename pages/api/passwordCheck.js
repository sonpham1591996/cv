import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler("YOUR_SECRET_PASSWORD", {
  cookieName: "next-password-protect",
});