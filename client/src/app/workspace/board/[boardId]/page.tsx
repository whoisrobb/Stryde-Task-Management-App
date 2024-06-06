"use client";

import { BoardItem, ListCardProps, SearchParams } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import BoardHeader from '../../_components/board-header'
import { Separator } from '@/components/ui/separator'
import { useParams } from 'next/navigation';
import { fetchBoard } from '@/app/actions/board-actions';
import { fetchFilteredLists } from '@/app/actions/list-actions';
import ListsComponent from '../../_components/lists-component';

const Board = ({ searchParams }: { searchParams: string | string[] | undefined }) => {
    const { boardId } = useParams();
    const [boardDetails, setBoardDetail] = useState<BoardItem | null>(null);
    const [lists, setLists] = useState<ListCardProps[] | null>(null);
    
    useEffect(() => {
        getData();
    }, [boardId, searchParams])

    const getData = async () => {
        const [boardData, listsData] = await Promise.all([fetchBoard(boardId as string), fetchFilteredLists(searchParams, boardId as string)]);
        setBoardDetail(boardData);
        setLists(listsData);
    }
  return (
    boardDetails && lists &&
    <div className='w-full h-full max-h-[calc(100vh-4rem)] space-y-4 overflow-scroll'>
      <BoardHeader board={boardDetails} />
      <Separator />
      <ListsComponent listsData={lists} boardId={boardDetails.boardId} />
    </div>
  )
}

export default Board
