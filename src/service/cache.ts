import NodeCache from "node-cache";

const myCache = new NodeCache({ stdTTL: 60 * 5 });

export const cacheGet = (key = "") => myCache.get(key);

/**
 *
 * @param {string} key
 * @param {string} value
 * @param {number} ttl (in seconds)
 * @returns
 */
export const addToCache = (key: string, value: string, ttl = 600) => myCache.set(key, value, ttl);
