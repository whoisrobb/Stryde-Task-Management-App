import { z } from "zod";

export const userWorkspaceSchema = z.object({
    firstName: z.string().min(3).max(55),
    lastName: z.string().min(3).max(55),
    domain: z.string().min(0).max(55).optional(),
    description: z.string().min(0).max(255).optional(),
});

export const boardSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().max(255).optional()
});

export const listSchema = z.object({
    name: z.string().min(3).max(255),
});

export const cardSchema = z.object({
    name: z.string().min(3).max(255),
});