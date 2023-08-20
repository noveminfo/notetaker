import { Box, Button, Flex, Input } from '@chakra-ui/react'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import CodeMirror from '@uiw/react-codemirror'
import { useState } from 'react'

export const NoteEditor = ({
  onSave,
  onClose,
}: {
  onSave: (note: { title: string; content: string }) => void
  onClose: () => void
}) => {
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')

  return (
    <Flex flexDirection="column" gap="8px">
      <Input
        type="text"
        fontSize="24px"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Box border="1px">
        <CodeMirror
          value={code}
          width="100%"
          height="40vh"
          // minWidth="300px"
          minHeight="40vh"
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
          onChange={(value) => setCode(value)}
          // className="border border-gray-300"
        />
      </Box>
      <Button
        onClick={() => {
          onSave({ title, content: code })
          setCode('')
          setTitle('')
          onClose()
        }}
        bg="blue.400"
        w="80px"
        ml="auto"
        isDisabled={title.trim() === '' || code.trim() === ''}
      >
        Save
      </Button>
    </Flex>
  )
}
