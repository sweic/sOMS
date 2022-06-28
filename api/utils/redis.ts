import * as redis from "redis";

export const redisClient = redis.createClient();

export const getRedisAsync = async (key: string) => {
  return await redisClient.get(key);
};

export const setRedisAsync = async (key: string, value: string | number) => {
  return await redisClient.set(key, value);
};
