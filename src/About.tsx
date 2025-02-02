import { Box, Text, Heading, Container, HStack, Link, VStack } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/prose";

export function About() {
    const skills = [
        "Python", "TypeScript", "React", "FastAPI", "Azure", "AWS",
        "Docker", "Git", "React Query", "RESTful APIs", "C++", "Java", "AWS SDK", "TDD"
    ];

    return (
        <Container maxW="800px" p={8}>
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
                <HStack justify="center" mt={2}> {/* Added spacing */}
                    <Link href="mailto:lefterisyilmaz96@gmail.com">lefterisyilmaz96@gmail.com</Link>
                    <Text>|</Text>
                    <Link href="https://github.com/lefterisxefteris">github.com/lefterisxefteris</Link>
                </HStack>
            </Box>

            <Prose>
                <h2>About Me</h2>
                <p>
                    Software Engineer with experience in full-stack development and open source contributions.  Passionate about building scalable and maintainable applications.
                </p>

                <h2>Open Source Experience</h2>
                <VStack > {/* Use VStack for better structure */}
                    <Box>
                        <h3>Apache Airflow</h3>
                        <Text>Nov 2024 - Present</Text>
                        <Text>Open source contributor - Frontend developer (Remote)</Text>
                        <Box ml={4}> {/* Add some indentation */}
                            <Text>
                                ● Developing Pool Slots monitoring dashboard using TypeScript/React to visualize resource
                                allocation.
                            </Text>
                            <Text>
                                ● Designed read-only and interactive components to track 6 key metrics (total, running,
                                open, deferred, queued, and scheduled) for efficient management.
                            </Text>
                            <Text>● Implemented React Query for optimized state management and real-time data updates.</Text>
                            <Text>
                                ● Collaborating with Airflow’s front-end team to modernize resource monitoring capabilities.
                            </Text>
                        </Box>
                    </Box>

                    <Box>
                        <h3>Prowler</h3>
                        <Text>Oct 2024 - Nov 2024</Text>
                        <Text>Open source contributor - Security engineer (Remote)</Text>
                        <Box ml={4}>
                            <Text>
                                ● Actively contributing to Prowler’s development, enhancing its capabilities to identify and
                                migrate security risks.
                            </Text>
                            <Text>● Developed and tested 3 new features, increasing Prowler’s AWS coverage by 4%.</Text>
                            <Text>● Implemented TDD practices, resulting in zero failures across 4 development lifecycles.</Text>
                            <Text>
                                ● Executed a comprehensive analysis through the integration of AWS SDK; identified 3 primary
                                areas in need of immediate attention regarding existing cloud service configurations impacting
                                overall systems integrity.
                            </Text>
                        </Box>
                    </Box>
                </VStack>


                <h2>Current Projects</h2>
                <VStack >
                    <Box>
                        <h3>CloudSpeak</h3>
                        <Text>Dec 2024 - Present</Text>
                        <Box ml={4}>
                            <Text>
                                ● Developed a FastAPI application to manage Azure resources, enabling programmatic access to
                                subscriptions, resource groups, and individual resources.
                            </Text>
                            <Text>
                                ● Integrated Google's Gemini Pro AI model to interpret natural language requests for
                                provisioning Azure storage accounts, automating resource creation based on user prompts.
                            </Text>
                            <Text>
                                ● Implemented Azure SDK for Python to interact with Azure services, including resource
                                management, storage account creation, and authentication using Azure CLI credentials.
                            </Text>
                            <Text>
                                ● Built a foundation for a user-friendly web interface using React and TanStack Query to
                                consume the API and visualize Azure resources, enhancing usability and accessibility.
                            </Text>
                        </Box>
                    </Box>
                </VStack>

                <h2>Education</h2>
                <Box>
                  <h3>University Of Leicester</h3>
                  <Text>June 2023</Text>
                  <Text>Bachelors of Science - Computer Science, Leicester, UK</Text>
                  <Box ml={4}>
                      <Text>
                          ● Courseworks: Data structures, Algorithmic performance, Functional programming, OOP, Operating
                          systems, Internet and cloud computing, relational databases, C++, Java, Software Architecture.
                      </Text>
                      <Text>● Final-year project: Full-stack web application; 3D asset store.</Text>
                      <Text>● Leadership: Computer Science society.</Text>
                  </Box>
                </Box>

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

                <h2>Other Experience</h2>
                <Box>
                    <h3>Hospitality Industry - Bartender</h3>
                    <Text>Jan 2017 - Present</Text>
                </Box>

            </Prose>
        </Container>
    );
}