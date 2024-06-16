import { authMiddleware } from "@clerk/nextjs";

//hooks
export default authMiddleware({
  publicRoutes: ["/api/webhooks/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
