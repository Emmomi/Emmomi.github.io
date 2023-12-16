import { HStack, VStack, Text, Card, CardHeader, CardBody, CardFooter, Heading, Image } from '@chakra-ui/react'
import { FC } from 'react';

export const Content:FC = () => {
    return (
        <HStack>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Sample Content</Text>
                </CardHeader>
                <CardBody>何か書きます</CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Text as='b' color='#00a3af'>Sample Content</Text>
                </CardHeader>
                <CardBody>何か書きます</CardBody>
            </Card>
        </HStack>
    )
}