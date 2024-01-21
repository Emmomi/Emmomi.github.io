'use client'
import { HStack, VStack, Text, Card, CardHeader, CardBody, CardFooter, Link, Image, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { FC, useState } from 'react';

interface Prop{
    link:string
    src:string
    title:string
    description?:React.ReactNode
    content?:React.ReactNode
}

const MediaLink:FC<Prop> = (Prop) => {
    const [isHovered, setHovered] = useState(true)

    return (
        <Link href={Prop.link}>
            <Card
                as={motion.div}
                whileHover={{
                    scale:1.2,
                    y:-20,
                }}
                onHoverStart={()=>{setHovered(false)}}
                onHoverEnd={()=>{setHovered(true)}}
            >
                <CardBody>
                    <VStack>
                        <HStack>
                            <Image src={Prop.src} boxSize='70px'/>
                            <VStack align='stretch' as={motion.div} animate={{ display: isHovered ? "none":"flex" }}>
                                <Text as='b' color='#00a3af'>{Prop.title}</Text>
                                {Prop.description}
                            </VStack>
                        </HStack>
                        <Box  as={motion.div} animate={{ display: isHovered ? "none":"flex" }}>
                            {Prop.content}
                        </Box>
                    </VStack>
                </CardBody>
            </Card>
        </Link>
    )
}

export const Media:FC = () => {
    return (
        <HStack spacing='4'>
            <MediaLink
                link='https://www.youtube.com/channel/UCzOqUDuXKMgUo7JwP2aApcA'
                src='/icons/Youtube.png'
                title='Youtube'
                description={
                    <VStack>
                        <Text>Blenderの動画を挙げたり配信してたり</Text>
                    </VStack>
                }
                content={<iframe width="280" height="150" src="https://www.youtube.com/embed/idwNdJkRF4c?si=vC1tDogdvwoCuk8W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
            />
            <MediaLink
                link='https://qiita.com/Emmomi1'
                src='/icons/qiita.png'
                title='Qiita'
                description={
                    <VStack>
                        <Text>色々記事を書いてます</Text>
                        <Text>こっちは技術メイン</Text>
                    </VStack>
                }
            />
            <MediaLink
                link='https://emmomi.hatenablog.com/'
                src='/icons/Hatena_blog_logo.svg'
                title='はてなブログ'
                description={
                    <VStack>
                        <Text>色々記事を書いてます</Text>
                        <Text>こっちは雑談メイン</Text>
                    </VStack>
                }
            />
            <MediaLink
                link='http://pixiv.net/users/68090145'
                src='/icons/pixiv.svg'
                title='Pixiv'
                description={<Text>3DCG上げてます</Text>}
            />
            <MediaLink
                link='http://emmomi.booth.pm/'
                src='/icons/booth.svg'
                title='Booth'
                description={
                    <VStack>
                        <Text>3Dのオブジェクトを販売してます</Text>
                        <Text> 買ってね</Text>
                    </VStack>
                }
            />
            <MediaLink
                link='https://twitter.com/Emmomi1'
                src='/icons/twitter-original.svg'
                title='Twitter'
                description={<Text>CG上げてます</Text>}
            />
            <MediaLink
                link='https://misskey.io/@Emmomi'
                src='/icons/misskey.jpg'
                title='Misskey'
                description={<Text>CG上げてます</Text>}
            />
            <MediaLink
                link='https://unityroom.com/users/3d1u0tqvjme725plgno8'
                src='/icons/unityroom.png'
                title='Unityroom'
                description={<Text>ゲームがあります</Text>}
            />
            <MediaLink
                link='https://github.com/Emmomi'
                src='/icons/github-original.svg'
                title='GitHub'
                description={<Text>ソースコードがいろいろ</Text>}
            />
        </HStack>
    )
}