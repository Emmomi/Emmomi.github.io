import { HStack, Link, Image } from '@chakra-ui/react'
import { FC } from 'react';

export const Contact:FC = () => {
    return (
        <HStack>
            <Link href='https://twitter.com/Emmomi1'>
                <Image src='/icons/twitter-original.svg' boxSize='70px' />
            </Link>
        </HStack>
    )
}