import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import BoardFilters from './board-filters';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { BoardItem } from '@/lib/types';


const BoardHeader = ({ board }: { board: BoardItem }) => {
  return (
    <div className="flex justify-between h-24 items-end">
        <div className="leading-tight">
          <h1 className="font-bold text-3xl">{board.name}</h1>
          <p className="text-muted-foreground">{board.description}</p>
        </div>
        <div className="flex items-center gap-4">
            <BoardFilters />

            <Popover>
                <PopoverTrigger>
                    <button className='w-6 h-6 transition-colors hover:bg-secondary rounded flex justify-center items-center'><DotsVerticalIcon /></button>
                </PopoverTrigger>
                <PopoverContent className='w-48 p-2'>
                    <button className='w-full text-left text-muted-foreground py-1 px-2 capitalize rounded hover:bg-accent hover:text-accent-foreground transition-colors'><div className="flex items-center gap-2">share board</div></button>
                    <button className='w-full text-left text-muted-foreground py-1 px-2 capitalize rounded hover:bg-accent hover:text-accent-foreground transition-colors'><div className="flex items-center gap-2">create new list</div></button>
                    <button className='w-full text-left text-destructive py-1 px-2 capitalize rounded hover:bg-[#ff49492b] hover:text-destructive-foreground transition-colors'
                        // onClick={() => deleteBoard({ boardId: boardId as string, userId: userData?.userId as string, navigate})}
                    >
                        <div className="flex items-center gap-2">delete board</div>
                    </button>
                </PopoverContent>
            </Popover>
        </div>
    </div>
  )
}

export default BoardHeader
