import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { UserTable } from "./user-table";
import { LabelTable } from "./label-table";


export const CardLabelsTable = pgTable("cardLabelstable", {
    userId: uuid("userId").references(() => UserTable.userId),
    labelId: uuid("labelId").references(() => LabelTable.labelId),
}, table => {
    return {
        pk: primaryKey({ columns: [table.userId, table.labelId] })
    }
});