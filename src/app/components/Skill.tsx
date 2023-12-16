import { HStack, VStack, Text, Card, CardHeader, CardBody, CardFooter, Heading, Image } from '@chakra-ui/react'
import { FC } from 'react';

export const Skill:FC = () => {
    return (
        <HStack spacing='4'>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Backend</Text>
                </CardHeader>
                <CardBody>
                    <HStack  align='stretch'>
                        <Image src='/icons/c-original.svg' boxSize='70px' />
                        <Image src='/icons/csharp-original.svg' boxSize='70px' />
                        <Image src='/icons/dotnetcore-original.svg' boxSize='70px' />
                        <Image src='/icons/python-original.svg' boxSize='70px' />
                        <Image src='/icons/fastapi-original.svg' boxSize='70px' />
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Frontend</Text>
                </CardHeader>
                <CardBody>
                    <HStack>
                        <Image src='/icons/typescript-original.svg' boxSize='70px' />
                        <Image src='/icons/javascript-original.svg' boxSize='70px' />
                        <Image src='/icons/nextjs-original.svg' boxSize='70px' />
                        <Image src='/icons/html5-original-wordmark.svg' boxSize='70px' />
                        <Image src='/icons/css3-original-wordmark.svg' boxSize='70px' />
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Tools</Text>
                </CardHeader>
                <CardBody>
                    <HStack>
                        <Image src='/icons/git-original.svg' boxSize='70px' />
                        <Image src='/icons/github-original.svg' boxSize='70px' />
                        <Image src='/icons/vscode-original.svg' boxSize='70px' />
                        <Image src='/icons/inkscape-original.svg' boxSize='70px' />
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Game</Text>
                </CardHeader>
                <CardBody>
                    <HStack>
                        <Image src='/icons/unity-original.svg' boxSize='70px' />
                        <Image src='/icons/unrealengine-original.svg' boxSize='70px' />
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>3DCG</Text>
                </CardHeader>
                <CardBody>
                    <HStack>
                        <Image src='/icons/blender-original.svg' boxSize='70px' />
                    </HStack>
                </CardBody>
            </Card>
        </HStack>
    )
}