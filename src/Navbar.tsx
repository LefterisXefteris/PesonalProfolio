import { HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function NavBar() {
  return (
    <HStack justify="center" flex={1} pt={4}>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </HStack>
  )
}