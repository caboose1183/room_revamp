import { authMiddleware } from "@clerk/nextjs";

//hooks
export default authMiddleware({
  ignoredRoutes: [],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
