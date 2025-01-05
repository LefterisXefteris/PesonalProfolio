import { useEffect, useState } from 'react'
import { Box, Image, VStack, Heading, Spinner, Text } from "@chakra-ui/react"


interface SideBarProps {
    username?: string;
}

export function SideBar({ username = 'LefterisXefteris'}: SideBarProps) {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [location, setLocation] = useState<string | null>(null);
    const [profile, setProfile] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubProfile = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub profile');
                }

                const data = await response.json();
                setAvatarUrl(data.avatar_url);
                setLocation(data.location);
                setProfile(data.profile);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubProfile();
    }, [username]);

    return (
        <Box position="fixed" left={0} top="60px" width="20%">
          <VStack alignItems="flex-start" ml={4}>
            <Box>
              {loading ? (
                <Spinner size="xl" />
              ) : error ? (
                <Text color="red.500">{error}</Text>
              ) : (
                <Image
                  src={avatarUrl || ''}
                  boxSize="150px"
                  borderRadius="full"
                  fit="cover"
                  alt={`${username}'s profile picture`}
                />
              )}
              <VStack mt={4}>
                <Heading size="md">{profile}</Heading>
                <Text>{username}</Text>
                <Text>{location}</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      );
    }