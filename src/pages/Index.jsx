import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Index = () => {
  const primaryColor = "#FF6347"; // Vibrant Tomato Red for accents
  const secondaryColor = "#2E8B57"; // Sea Green for secondary accents

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" bg="white" p={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Flex alignItems="center">
          <Image src="https://images.unsplash.com/photo-1554866585-cd94860890b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fHx8MTcxNTM0NTcxOXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" mr={4} />
          <Heading size="lg" color={primaryColor}>
            Fashionista
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Link href="#" p={2} fontSize="lg" fontWeight="bold" color="gray.600" _hover={{ color: primaryColor }}>
            Men
          </Link>
          <Link href="#" p={2} fontSize="lg" fontWeight="bold" color="gray.600" _hover={{ color: primaryColor }}>
            Women
          </Link>
          <Link href="#" p={2} fontSize="lg" fontWeight="bold" color="gray.600" _hover={{ color: primaryColor }}>
            Kids
          </Link>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="ghost" ml={4}>
            Cart
          </Button>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="ghost" ml={2}>
            Account
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" align="center" mt={10} mb={10}>
        <Heading mb={4} color={secondaryColor}>
          New Arrivals
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Box key={index} bg="white" boxShadow="md" borderRadius="lg" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaXRlbSUyMCUyNCU3QmluZGV4JTIwJTJCJTIwMSU3RHxlbnwwfHx8fDE3MTUzNDU3MjB8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Fashion Item ${index + 1}`} />
              <Box p={5}>
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  Item {index + 1}
                </Text>
                <Text fontSize="md" color="gray.600">
                  $29.99
                </Text>
                <Button mt={3} colorScheme="red" variant="solid" bg={primaryColor} _hover={{ bg: secondaryColor }}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>

      <Flex as="footer" bg="gray.100" p={6} justifyContent="center">
        <Text fontSize="sm" color="gray.600">
          © 2023 Fashionista. All rights reserved.
        </Text>
      </Flex>
    </Container>
  );
};

export default Index;
