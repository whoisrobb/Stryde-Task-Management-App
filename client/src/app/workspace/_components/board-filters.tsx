"use client";

import React, { useCallback } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const BoardFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const order = searchParams.get('order');
    
    const handleOrder = (value: string) => {
        router.push(pathname + '?' + createQueryString('order', value))
    };
    
    const handleOrderBy = (value: string) => {
        router.push(pathname + '?' + createQueryString('orderBy', value))
    };
    
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
        
            return params.toString()
        },
        [searchParams]
    );
  return (
    <div className="flex gap-2">
        <Select
            onValueChange={handleOrder}
        >
            <SelectTrigger className="">
                <SelectValue placeholder="Filter:" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
        </Select>

        <Select
            onValueChange={handleOrderBy}
        >
            <SelectTrigger className="">
                <SelectValue placeholder="Order by:" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="position">Position</SelectItem>
                <SelectItem value="date">Date</SelectItem>
            </SelectContent>
        </Select>        
    </div>
  )
}

export default BoardFilters
