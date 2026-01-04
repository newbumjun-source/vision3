import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getMe: protectedProcedure.query(({ ctx }) => {
    // ctx.user는 isAuthed 미들웨어에서 이미 설정됨 (Just-in-Time Provisioning 포함)
    return ctx.user;
  }),
});
