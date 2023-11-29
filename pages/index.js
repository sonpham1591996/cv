import {
    Box,
    chakra,
    Container,
    Heading,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import {BioLi, BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'style'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container pt={6}>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{backdropFilter: 'blur(10px)'}}
            >
                Hello, I am a developer based in Vietnam!
            </Box>

            <Box display={{md: 'flex'}} mb={12}>
                <Box flexFlow={1}>
                    <Heading as="h1" variant="page-title">
                        Son Minh Pham
                    </Heading>
                    <div style={{margin: '0.4rem auto'}}>
                        <p>Full Stack Developer</p>
                    </div>
                    <div>Birthday: 1996-09-15</div>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 'auto'}}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/Avatar.jpeg"
                            alt="Profile image"
                            borderRadius="full"
                            width={480}
                            height={480}
                            style={{width: '100%', height: '100%'}}
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am a software developer with 3 years of experience in designing and implementing
                    technical solutions and feature improvements. Besides, I have more than 1 year of
                    experience in some freelance projects. Learning new languages and technologies is
                    what I am passionate about.
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{backdropFilter: 'blur(10px)'}}
                    >
                        <BioYear>2017 -&gt; TMA Solutions Company</BioYear>
                    </Box>
                    <div style={{margin: '1rem auto'}}>
                        I had internship at TMA Solutions Company. I and my teammate
                        developed a small project about tracking trucks on Google Maps.
                    </div>
                    <ul>
                        Responsibilities:
                        <BioLi>
                            - Design APIs for application using Spring Boot, JPA, Hibernate
                        </BioLi>
                        <BioLi>
                            - Design UI for web application by Angular 2+
                        </BioLi>
                    </ul>
                </BioSection>
                <BioSection>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{backdropFilter: 'blur(10px)'}}
                    >
                        <BioYear>2018</BioYear>
                    </Box>
                    <div style={{margin: '1rem auto'}}>
                        Graduated in University of Science Ho Chi Minh, Vietnam.
                    </div>
                    <ul>
                        Major:
                        <BioLi>
                            - Embedded of System
                        </BioLi>
                    </ul>
                </BioSection>
                <BioSection>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{backdropFilter: 'blur(10px)'}}
                    >
                        <BioYear>2018 to 2020 -&gt; ELCA Vietnam</BioYear>
                    </Box>
                    <div style={{margin: '1rem auto'}}>
                        I am Full-Stack developer with technologies: Java Spring Boot, JPA,
                        Hibernate, Angular 6, Bootstrap
                    </div>
                    <ul>
                        <div>Duties and responsibilities:</div>
                        <BioLi>
                            - Developed application using a variety of languages, frameworks, and platforms
                            such as Java Spring Boot, Hibernate, JPA, Angular 2+, HTML and CSS.
                        </BioLi>
                        <BioLi>
                            - Self-design skeleton and implement APIs for my user stories or tasks to support
                            client-server connections.
                        </BioLi>
                        <BioLi>
                            - I presented software design issues, questions, and suggestions for the design
                            of features with my colleagues.
                        </BioLi>
                        <BioLi>
                            - Manage user stories or tasks by Jira.
                        </BioLi>
                    </ul>
                </BioSection>
                <BioSection>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{backdropFilter: 'blur(10px)'}}
                    >
                        <BioYear>
                            2020 to 2021 -&gt; mgm technology partners Viet Nam
                        </BioYear>
                    </Box>
                    <div style={{margin: '1rem auto'}}>
                        I am Java developer with technologies: Java Spring Boot, JPA,
                        Hibernate.
                    </div>
                    <ul>
                        <div>Duties and responsibilities:</div>
                        <BioLi>
                            - Maintain the old website about E-Commerce domain using Struts and a little bit
                            about HTML, CSS, JS, JQuery, and Ajax.
                        </BioLi>
                        <BioLi>
                            - Migrate the above project to a new system using Spring Boot, Hibernate, JPA,
                            and ReactJS with a microservice architecture.
                        </BioLi>
                    </ul>
                </BioSection>
                <BioSection>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{backdropFilter: 'blur(10px)'}}
                    >
                        <BioYear>2021-09 to 2023-08 -&gt; Heatmob Company</BioYear>
                    </Box>
                    <div style={{margin: '1rem auto'}}>
                        I am Full-Stack developer with technologies: NodeJS, ExpressJS,
                        ReactJS, NextJS, Redux.
                    </div>
                    <ul>
                        <div>Projects:</div>
                        <BioLi>
                            - DragonWar (Game NFT)
                            - Travel domain project
                        </BioLi>
                    </ul>
                    <ul>
                        <div>Duties and responsibilities:</div>
                        <BioLi>
                            - Developed applications using Express.js, Worker Service, ReactJS, Next.js.
                            Self-design skeleton and implement APIs for my user stories or tasks to support
                            client-server connections.
                        </BioLi>
                        <BioLi>
                            - Integrate with RPC and contracts from Solana Blockchain team to charge
                            tokens and buy or sell NFT on marketplace.
                        </BioLi>
                        <BioLi>
                            - I presented software design issues, questions, and suggestions for the design
                            of features with my colleagues.
                        </BioLi>
                        <div style={{marginTop: '15px'}}>Live version:</div>
                        <BioLi>
                            - <a
                                href="https://dragonwar.io/"
                                target={'_blank'}
                            >
                                https://dragonwar.io
                            </a>
                        </BioLi>
                        <BioLi>
                            - <a
                                href="https://marketplace.dragonwar.io/"
                                target={'_blank'}
                            >
                                https://marketplace.dragonwar.io
                            </a>
                        </BioLi>
                    </ul>
                </BioSection>
            </Section>

            <div style={{marginTop: '2.8rem'}}>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Free time and activities
                    </Heading>
                    <ul>
                        <BioLi>
                            - I am keen on reading books, IT blogs, Medium and in my free
                            time.
                        </BioLi>
                        <BioLi>
                            - I also work on some mini projects to improve my skills.
                        </BioLi>
                    </ul>
                </Section>
            </div>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
