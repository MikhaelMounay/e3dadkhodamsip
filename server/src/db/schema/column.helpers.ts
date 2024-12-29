import { timestamp } from "drizzle-orm/pg-core";

// Define timestamps for all tables
const baseTimestamps = {
    updatedAt: timestamp(),
    createdAt: timestamp().defaultNow().notNull(),
    deletedAt: timestamp(),
};

export { baseTimestamps };
