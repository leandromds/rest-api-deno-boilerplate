import { Application, Router } from "./deps.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Initial setup to REST API Deno + Oak + Prisma</title><head>
      <body>
        <h1>Initial setup to REST API Deno + Oak + Prisma</h1>
      </body>
    </html>
  `;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
