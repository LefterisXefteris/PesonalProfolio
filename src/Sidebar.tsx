
import { Box, Image, VStack, Heading, Spinner, Text } from "@chakra-ui/react"
import { useQuery } from '@tanstack/react-query';

interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

export function SideBar() {
  const { isLoading, error, data: info } = useQuery<GitHubProfile, Error>({
    queryKey: ['info'],
    queryFn: async () => {
    
      const response = await fetch("https://api.github.com/users/LefterisXefteris");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    }
  });


  if (isLoading) {
    return (
      <Box position="fixed" left={0} top="60px" width="20%">
        <VStack alignItems="flex-start" ml={4}>
          <Spinner size="xl" />
          <Text>Loading...</Text>
        </VStack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box position="fixed" left={0} top="60px" width="20%">
        <VStack alignItems="flex-start" ml={4}>
          <Text color="red.500">Error: {error.message}</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box position="fixed" left={0} top="60px" width="20%">
      <VStack alignItems="flex-start" ml={4}>
        <Box>
          <Image
            src={info?.avatar_url}
            boxSize="150px"
            borderRadius="full"
            fit="cover"
            alt={`${info?.login}'s profile picture`}
          />
          <VStack mt={4} align="start">
            <Heading size="md">{info?.name || 'No name available'}</Heading>
            <Text>{info?.login || 'No username available'}</Text>
            <Text>{info?.location || 'No location available'}</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}