import { Box, Text, Heading, Container, HStack } from "@chakra-ui/react"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/prose"

export function About() {
    const skills = [
        "Python", "TypeScript", "React", "FastAPI", "Azure", "AWS", 
        "Docker", "Git", "React Query", "RESTful APIs", "C++", "Java"
    ];

    return (
        <Container maxW="800px" p={8}>
            {/* Simple Header */}
            <Box textAlign="center" mb={8}>
                <Heading as="h1" size="2xl" color="blue.600" mb={4}>
                    Lefteris Gilmaz
                </Heading>
                <Text fontSize="xl" color="gray.600">
                    Software Engineer | Open Source Contributor
                </Text>
                <HStack justify="center" mt={4}>
                    <Tag>🇬🇧 London-based</Tag>
                    <Tag>🎓 BSc Computer Science</Tag>
                </HStack>
            </Box>

            <Prose>
                {/* About */}
                <h2>About Me</h2>
                <p>
                    Software Engineer with experience in full-stack development and open source contributions. Currently contributing to Apache Airflow, developing a Pool Slots monitoring dashboard, and working on CloudSpeak, a FastAPI application integrating Google's Gemini Pro AI for Azure resource management.
                </p>

                {/* Projects */}
                <h2>Current Projects</h2>
                <h3>Apache Airflow Contributor</h3>
                <p>
                    Developing Pool Slots monitoring dashboard using TypeScript/React to visualize resource allocation. Implementing React Query for optimized state management and real-time data updates.
                </p>

                <h3>CloudSpeak</h3>
                <p>
                    FastAPI application to manage Azure resources, enabling programmatic access to subscriptions and resource groups. Integrated Google's Gemini Pro AI model for natural language processing.
                </p>

                {/* Skills */}
                <h2>Technical Skills</h2>
                <Box>
                    <HStack flexWrap="wrap">
                        {skills.map((skill) => (
                            <Tag key={skill} m={1}>
                                {skill}
                            </Tag>
                        ))}
                    </HStack>
                </Box>
            </Prose>
        </Container>
    )
}