import { HStack, VStack, Text, Card, CardHeader, CardBody, CardFooter, Link, Image } from '@chakra-ui/react'
import { FC } from 'react';

interface Prop{
    link:string
    src:string
    title:string
    text:string
}

const MediaLink:FC<Prop> = (Prop) => {
    return (
        <Link href={Prop.link}>
            <Card>
                <CardBody>
                    <HStack>
                        <Image src={Prop.src} boxSize='70px'/>
                        <VStack align='stretch'>
                            <Text as='b' color='#00a3af'>{Prop.title}</Text>
                            <Text>{Prop.text}</Text>
                        </VStack>
                    </HStack>
                </CardBody>
            </Card>
        </Link>
    )
}

export const Media:FC = () => {
    return (
        <HStack>
            <MediaLink
                link='https://www.youtube.com/channel/UCzOqUDuXKMgUo7JwP2aApcA'
                src='/icons/Youtube.png'
                title='Youtube'
                text='Blenderの動画を挙げたり配信してたり'
            />
            <MediaLink
                link='https://qiita.com/Emmomi1'
                src='/icons/qiita.png'
                title='Qiita'
                text='色々記事を書いてます'
            />
            <MediaLink
                link='http://pixiv.net/users/68090145'
                src='/icons/pixiv.svg'
                title='Pixiv'
                text='3DCG上げてます'
            />
            <MediaLink
                link='http://emmomi.booth.pm/'
                src='/icons/booth.svg'
                title='Booth'
                text='3Dのオブジェクトを販売してます'
            />
            <MediaLink
                link='https://twitter.com/Emmomi1'
                src='/icons/twitter-original.svg'
                title='Twitter'
                text='CG上げてます'
            />
            <MediaLink
                link='https://misskey.io/@Emmomi'
                src='/icons/misskey.jpg'
                title='Misskey'
                text='CG上げてます'
            />
        </HStack>
    )
}