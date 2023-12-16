import {
    Box,
    Flex,
    Container,
    Heading,
    Link,
    HStack,
} from '@chakra-ui/react';
import NextLink from "next/link";
import { FC } from 'react';

export const Header: FC = () => {    
    return (
        <Box w='100%' px={4} bgColor="gray.400"  position="fixed" zIndex="999">
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <NextLink href="/" passHref>
                        <Heading as='h1' fontSize="2xl" cursor="pointer">
                            Emmomi
                        </Heading>
                    </NextLink>
                    <HStack>
                        <Link href='#About'>About</Link>
                        <Link href='#Media'>Media</Link>
                        <Link href='#Content'>Content</Link>
                        <Link href='#Skill'>Skill</Link>
                        <Link href='#Contact'>Contact</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}