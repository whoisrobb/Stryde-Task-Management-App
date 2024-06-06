"use client";

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    // SelectGroup,
    SelectItem,
    // SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button } from '@/components/ui/button';
import { ListCardProps } from '@/lib/types';
import { DotsVerticalIcon, PlusIcon } from '@radix-ui/react-icons';
import CardItem from './card-item';

const ListsComponent = ({ listsData, boardId }: { listsData: ListCardProps[], boardId: string }) => {
    const [lists, setLists] = useState(listsData);
    
  const handleDragDrop = (result: any) => {
    const { source, destination } = result
    if (!lists) return

    const listSourceIndex = lists.findIndex((list) => list.listId === source.droppableId)
    const listDestinationIndex = lists.findIndex((list) => list.listId === destination.droppableId)

    const newSourceCards = [...lists[listSourceIndex].cards]
    const newDestinationCards = source.droppableId !== destination.droppableId
      ? [...lists[listDestinationIndex].cards]
      : newSourceCards
    
      const [removedCard] = newSourceCards.splice(source.index, 1)
      newDestinationCards.splice(destination.index, 0, removedCard)


      const newLists = [...lists]

      newLists[listSourceIndex] = {
        ...lists[listSourceIndex],
        cards: newSourceCards
      }

      removedCard.listId = lists[listDestinationIndex].listId
    //   handleUpdateDnd({ valueId: removedCard.cardId, listId: lists[listDestinationIndex].listId })

      newLists[listDestinationIndex] = {
        ...lists[listDestinationIndex],
        cards: newDestinationCards
      }

    setLists(newLists)
  }

  return (
    <DragDropContext
      onDragEnd={handleDragDrop}
    >
      <div className="my-2 flex gap-2 items-start">
          {lists?.map((list) => (
              <div key={list.listId} className="min-w-72 border p-2 rounded">
                <Droppable droppableId={list.listId}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                      <div className="rounded flex items-center justify-between px-2 py-1">
                        <p className="">{list.name}</p>
                        <div className="flex gap-1">
                          <Popover>
                              <PopoverTrigger>
                                <button className='w-6 h-6 transition-colors hover:bg-secondary rounded flex justify-center items-center'><PlusIcon /></button>
                              </PopoverTrigger>
                              <PopoverContent>
                                  {/* <CreateCard valueId={list.listId} getData={getData} /> */}
                                  Placeholder
                              </PopoverContent>
                          </Popover>
                          
                          <Popover>
                              <PopoverTrigger>
                                <button className='w-6 h-6 transition-colors hover:bg-secondary rounded flex justify-center items-center'><DotsVerticalIcon /></button>
                              </PopoverTrigger>
                              <PopoverContent className='w-48 p-2'>
                                  <button className='w-full text-left text-muted-foreground py-1 px-2 capitalize rounded hover:bg-accent hover:text-accent-foreground transition-colors'>placeholder</button>
                                  <button className='w-full text-left text-muted-foreground py-1 px-2 capitalize rounded hover:bg-accent hover:text-accent-foreground transition-colors'>placeholder</button>
                                  <button
                                    className='w-full text-left text-destructive py-1 px-2 capitalize rounded hover:bg-[#ff49492b] hover:text-destructive-foreground transition-colors'
                                    // onClick={() => deleteList({ valueId: list.ListID, getData })}
                                  >
                                    delete list
                                </button>
                              </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      {list.cards.map((card, index) => (
                        <Draggable draggableId={card.cardId} index={index} key={card.cardId}>
                          {(provided) => (
                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <CardItem
                                // card={card}
                                // getData={getData}
                            />
                          </div>)}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}

          <Popover>
              <PopoverTrigger>
                  <Button variant={'secondary'} className='w-[15rem] rounded-sm'>Create list</Button>
              </PopoverTrigger>
              <PopoverContent>
                  {/* <CreateList valueId={boardId as string} getData={getData} /> */}
                  Placeholder
              </PopoverContent>
          </Popover>

      </div>
      </DragDropContext>
  )
}

export default ListsComponent
