"use client";

import { listSchema } from '@/lib/validators';
import { useUserStore } from '@/store/user-store';
import { zodResolver } from "@hookform/resolvers/zod"
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createList } from '@/app/actions/list-actions';

type ListInputSchema = z.infer <typeof listSchema>;
export type ListInputProps = ListInputSchema & { boardId: string };

const CreateList = ({ boardId }: { boardId: string }) => {
    const form = useForm<ListInputSchema>({
        resolver: zodResolver(listSchema),
        defaultValues: {
            name: '',
        }
    })

    const onSubmit = async (values: ListInputSchema) => {
        const formData = { ...values, boardId }
        const data = await createList(formData);
        console.log(data);
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full max-w-96">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>List name</FormLabel>
              <FormControl>
                <Input placeholder="List name" {...field} />
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

export default CreateList
