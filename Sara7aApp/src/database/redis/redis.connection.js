import { createClient } from "redis";
import { env } from "../../config/env.service.js";

export const redisConnection = async () => {
  const client = createClient({
    url: env.redisUrl,
  });

  client.on("error", function (err) {
    console.log("Redis error:", err);
  });
  await client.connect();
  console.log("redis connected");
  return client;
};
