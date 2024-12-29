import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { baseTimestamps } from "./column.helpers.js";

export const usersTable = pgTable("users", {
    id: serial().primaryKey().notNull(),
    name: text().notNull(),
    email: text().notNull().unique(),
    ...baseTimestamps,
});

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;
