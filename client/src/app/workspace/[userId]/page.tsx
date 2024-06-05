"use client";

import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { fetchUserBoards } from '@/app/actions/board-actions';
import { BoardItem } from '@/lib/types';
import Link from 'next/link';
import WorkspaceHeader from '../_components/workspace-header';
import { Separator } from '@/components/ui/separator';
import CreateBoard from '@/components/forms/create-board';

const Workspace = () => {
  const { userId } = useParams();
  const [userBoards, setUserBoards] = useState<BoardItem[] | null>([]);

  useEffect(() => {
    fetchBoards();
  }, []);
  
  const fetchBoards = async () => {
    const data = await fetchUserBoards(userId as string);
    setUserBoards(data);
  }

  return (
    <div className="px-4 py-2 space-y-4">
        <WorkspaceHeader />
        <Separator />
        <div className="">
            <p className="capitalize text-lg font-bold">personal boards</p>
            <div className="grid lg:grid-cols-5 gap-2 md:grid-cols-4 grid-cols-2">
                <Popover>
                    <PopoverTrigger>
                      <Button variant={'secondary'} className='h-20 w-full rounded-none text-lg'>
                        Create Board
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <CreateBoard />
                    </PopoverContent>
                </Popover>
                {userBoards &&
                    userBoards.map((board) => (
                        <Link
                            href={`/workspace/boards/${board.boardId}`}
                            className='h-20 py-2 px-4 border text-muted-foreground hover:bg-secondary hover:text-accent-foreground transition-colors'
                            key={board.boardId}
                        >
                            <p className="text-lg">{board.name}</p>
                        </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workspace
