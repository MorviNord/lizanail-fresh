FROM denoland/deno:latest

WORKDIR /app

COPY deno.json deno.lock ./
COPY . .

RUN deno task build

EXPOSE 8000

CMD ["serve", "--allow-net", "--allow-read", "--allow-env", "_fresh/server.js"]