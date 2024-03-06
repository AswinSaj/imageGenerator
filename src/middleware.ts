import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});
authMiddleware({ debug: true });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
