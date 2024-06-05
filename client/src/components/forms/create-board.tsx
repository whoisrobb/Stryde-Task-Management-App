"use client";

import { boardSchema, userWorkspaceSchema } from '@/lib/validators';
import { useUserStore } from '@/store/user-store';
import { zodResolver } from "@hookform/resolvers/zod"
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import { createBoard } from '@/app/actions/board-actions';

type BoardInputSchema = z.infer <typeof boardSchema>;
export type BoardInputProps = BoardInputSchema & { userId: string };

const CreateBoard = () => {
    const user = useUserStore((state) => state.userData);
    const form = useForm<BoardInputSchema>({
        resolver: zodResolver(boardSchema),
        defaultValues: {
            name: '',
            description: ''
        }
    })

    const onSubmit = async (values: BoardInputSchema) => {
        const formData = { ...values, userId: user?.userId! }
        const data = await createBoard(formData);
        console.log(data)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full max-w-96">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Board name</FormLabel>
              <FormControl>
                <Input placeholder="Board name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type='button' variant={"secondary"}>Cancel</Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateBoard
