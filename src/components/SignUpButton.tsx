import { Flex, Box } from '@chakra-ui/react'
import { useAuth } from '@/context/AuthContext'

function SignUpButton() {
  const { currentUser } = useAuth()
  return (
    <Flex bgColor='azure' w='full' justify='center'>
      {currentUser ? (
        <Flex bgColor='azure' w='60%' justifyContent='space-between'>
          <Box> Sign Up
          </Box>
        </Flex>
      ) : null}
    </Flex>
  )
}

export default SignUpButton
