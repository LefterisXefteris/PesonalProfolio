
import { SideBar } from './Sidebar';
import { NavBar } from './Navbar'
import { Box, Card, CardHeader, CardBody, CardFooter, Heading,VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean
  language: string | null;
}

export function UserRepos() {
  const { isLoading, error, data: repos } = useQuery<Repository[], Error>({
    queryKey: ['repos'],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/users/LefterisXefteris/repos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return <div className="loading">Loading repositories...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const userElements = repos?.map((userElement) => (
    <Card.Root width="320px" key={userElement.id}>
      <CardHeader>
        <Heading size="xs">
          <a href={userElement.html_url} target="_blank" rel="noopener noreferrer">
            {userElement.name}
          </a>
        </Heading>
      </CardHeader>
      <CardFooter color="gray.500">
        Language: {userElement.language ?? "none"}
      </CardFooter>
      <CardBody color="orange.500">
        {userElement.description}
      </CardBody>
      <CardBody color="blue.500">
        {userElement.fork? "Forked Repository" : "Original Repository"}
      </CardBody>
    </Card.Root>
  ));

  return (
    <Box>
      <NavBar/>
      <Box>
        <VStack alignItems="flex-start" ml={4} mt={8}>
        <SideBar />
        </VStack>
      </Box>
      <Box 
        w="70%" 
        ml="20%" 
        display="grid" 
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap={4} 
        p={2}
      >
        {userElements}
      </Box>
    </Box>
  );
}