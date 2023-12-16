import { ChakraProvider, VStack, Text, Box } from '@chakra-ui/react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Skill } from './components/Skill'
import { Content } from './components/Content'
import { Contact } from './components/Contact'
import { Media } from './components/Media'


export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <VStack>
        <Text boxSize='100px'></Text>
        <Box id='About' boxSize='35px'></Box>
        <About />
        <Box id='Media' boxSize='35px'></Box>
        <Text as='b' color='#00a3af' fontSize='5xl'>Media</Text>
        <Media />
        <Box id='Content' boxSize='35px'></Box>
        <Text as='b' color='#00a3af' fontSize='5xl'>Content</Text>
        <Content />
        <Box id='Skill' boxSize='35px'></Box>
        <Text as='b' color='#00a3af' fontSize='5xl'>Skill</Text>
        <Skill />
        <Box id='Contact' boxSize='35px'></Box>
        <Text as='b' color='#00a3af' fontSize='5xl'>Contact</Text>
        <Contact />
        <Text boxSize='100px'></Text>
      </VStack>
    </ChakraProvider>
  )
}
