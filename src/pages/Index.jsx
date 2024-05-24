import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";

const articles = [
  {
    title: "Global Markets Rally",
    summary: "Stocks around the world surged today as investors reacted positively to economic data.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Tech Innovations 2023",
    summary: "The latest advancements in technology are set to revolutionize various industries.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Climate Change Impact",
    summary: "New studies show the significant impact of climate change on global weather patterns.",
    image: "https://via.placeholder.com/150",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" bg="brand.800" color="white" py={4} mb={8}>
        <Heading as="h1" size="xl" textAlign="center">Financial Times</Heading>
      </Box>
      <VStack spacing={8}>
        {articles.map((article, index) => (
          <Flex key={index} direction={{ base: "column", md: "row" }} w="100%" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} boxSize="150px" objectFit="cover" mr={{ md: 4 }} mb={{ base: 4, md: 0 }} />
            <Box>
              <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
              <Text mb={4}>{article.summary}</Text>
              <Link color="brand.700" href={article.link}>Read more</Link>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;