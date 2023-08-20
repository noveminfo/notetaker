import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const { data: sessionData } = useSession()

  return (
    <Flex justifyContent="space-between" px="20px" py="10px" alignItems="center" bg="blue.400" fontSize="24px">
      <Text color="white" fontWeight={600}>
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ''}
      </Text>
      {sessionData?.user ? (
        <Menu>
          <MenuButton>
            <Avatar name={sessionData.user.name ?? ''} src={sessionData.user.image ?? ''} />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem onClick={() => void signOut()}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={() => void signIn()}>Sign in</Button>
      )}
    </Flex>
  )
}
