"use client";

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
import { cardSchema } from "@/lib/validators";
import { createCard } from "@/app/actions/card-actions";

type CardInputSchema = z.infer <typeof cardSchema>;
export type CardInputProps = CardInputSchema & { listId: string };

const CreateCard = ({ listId }: { listId: string }) => {
    const form = useForm<CardInputSchema>({
        resolver: zodResolver(cardSchema),
        defaultValues: {
            name: '',
        }
    });

    const onSubmit = async (values: CardInputSchema) => {
        const formData = { ...values, listId }
        const data = await createCard(formData);
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
              <FormLabel>Card name</FormLabel>
              <FormControl>
                <Input placeholder="Card name" {...field} />
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

export default CreateCard
