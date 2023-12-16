import { HStack, VStack, Text, Card, CardHeader, CardBody, CardFooter, Heading, Image, } from '@chakra-ui/react'
import { FC } from 'react';

interface Prop{
    title: string
    text: string
}

const Info: FC<Prop> = (Prop) => {
    return (
        <HStack>
            <Text as='b' color='#00a3af'>{Prop.title}</Text>
            <Text>{Prop.text}</Text>
        </HStack>
    )
}

export const About: FC = () => {
    return (
        <Card maxW='500px'>
            <CardHeader>
                <Heading size='md'>
                    <Text as='b' color='#00a3af' fontSize='3xl'>Emmomi</Text>
                </Heading>
                <CardBody>
                    <HStack>
                        <Image boxSize='150px' borderRadius='full' src='/Emmomi.jpg' alt='My Icon'></Image>
                        <VStack align='stretch'>
                            <Info title='Name' text='近藤 克'></Info>
                            <Info title='趣味' text='ゲーム Blender おでかけ'></Info>
                        </VStack>
                    </HStack>
                </CardBody>
            </CardHeader>
        </Card>
    )
} 