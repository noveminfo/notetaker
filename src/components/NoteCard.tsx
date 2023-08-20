import { Box, Button, Flex, Text } from '@chakra-ui/react'
import type { Note } from '@prisma/client'
import { format } from 'date-fns'

export const NoteCard = ({ note, onDelete }: { note: Note; onDelete: () => void }) => {
  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <Box py="10px">
        <Flex gap="8px" alignItems="baseline">
          <Text fontSize="2xl" fontWeight="bold">
            {note.title}
          </Text>
          <Text fontSize="12px" color="gray.400">
            {format(note.updatedAt, 'yyyy/M/d')}
          </Text>
          <Button onClick={onDelete} rounded="full" ml="auto">
            Delete
          </Button>
        </Flex>
        {/* {note.content.length < 60 ? ( */}
        <Text whiteSpace="pre-line">{note.content}</Text>
        {/* ) : (
          <Text whiteSpace="pre-line">{note.content.slice(0, 60).concat('...')}</Text>
        )} */}
      </Box>
    </div>
  )
}
