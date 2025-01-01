import { useEffect, useState } from 'react';
import {SideBar} from './Sidebar';
import { NavBar } from './Navbar'
import { Box, Card, Heading,Stack, VStack } from '@chakra-ui/react';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export function UserRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function listOfRepos() {
      try {
        const response = await fetch('https://api.github.com/users/LefterisXefteris/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: Repository[] = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    listOfRepos();
  }, []);

  if (loading) {
    return <div className="loading">Loading repositories...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const userElements = repos.map((userElement) => (

    <Stack direction={{ base: "column", md: "row" }} gap="5">
      <Card.Root width="320px" key={userElement.id}>
        <Card.Header>
          <Heading size="md"> 
          <a href={userElement.html_url} target="_blank" rel="noopener noreferrer">
          {userElement.name}
        </a>
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
        Language: {userElement.language === null ? "none" : userElement.language}
        </Card.Body>
        <Card.Body color="fg.warning">
        Descriptipon: {userElement.description}
        </Card.Body>
      </Card.Root>
      </Stack>

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
      gridTemplateColumns="repeat(2, 1fr)" 
      gap={4} 
      p={2}
    >
      {userElements}
    </Box>
  </Box>
  );
}

