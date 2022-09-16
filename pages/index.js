import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import { BioLi, BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
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
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I am a developer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }} mb={12}>
        <Box flexFlow={1}>
          <Heading as="h1" variant="page-title">
            Son Minh Pham
          </Heading>
          <div style={{ margin: '0.4rem auto' }}>
            <p>Full Stack Developer</p>
          </div>
          <div>Birthday: 1996-09-15</div>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 'auto' }}
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
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Son is a full-stack developer based in Vietnam with a passion for
          designing and implementing technical solutions and feature
          improvements. When not online, he loves coding with personal projects.
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
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <BioYear>2017 -&gt; TMA Solutions Company</BioYear>
          </Box>
          <div>
            I had internship at TMA Solutions Company. I and my teammate
            developed a small project about tracking trucks on Google Maps.
          </div>
        </BioSection>
        <BioSection>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <BioYear>2018</BioYear>
          </Box>
          Graduated in University of Science Ho Chi Minh, Vietnam.
        </BioSection>
        <BioSection>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <BioYear>2018 to 2020 -&gt; ELCA Vietnam</BioYear>
          </Box>
          <div style={{ margin: '1rem auto' }}>
            I am Full-Stack developer with technologies: Java Spring Boot, JPA,
            Hibernate, Angular 6, Bootstrap
          </div>
          <ul>
            <div>Duties and responsibilities:</div>
            <BioLi>
              - Developed app-solutions using a variety of languages,
              frameworks, and platforms such as Java Spring Boot, Hibernate,
              JPA, Angular 2+, HTML and CSS.
            </BioLi>
            <BioLi>
              - Self-design skeleton and implement API for my user-story or
              tasks to support client-server connection. Presented software
              design issues, questions, and suggestions to the design of
              features with my colleagues. Manage user-story or tasks by Jira.
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
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <BioYear>
              2020 to 2021 -&gt; mgm technology partners Viet Nam
            </BioYear>
          </Box>
          <div style={{ margin: '1rem auto' }}>
            I am Java developer with technologies: Java Spring Boot, JPA,
            Hibernate.
          </div>
          <ul>
            <div>Duties and responsibilities:</div>
            <BioLi>
              - Developed app-solutions using a variety of languages,
              frameworks, and platforms such as Java Spring Boot, Hibernate,
              JPA. Self-design skeleton and implement API for my user-story or
              tasks to support client-server connection.
            </BioLi>
            <BioLi>
              - Presented software design issues, questions, and suggestions to
              the design of features with my colleagues.
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
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <BioYear>2021 to 2022-08 -&gt; Heatmob Company</BioYear>
          </Box>
          <div style={{ margin: '1rem auto' }}>
            I am Full-Stack developer with technologies: NodeJS, ExpressJS,
            ReactJS, NextJS.
          </div>
          <ul>
            <div>Duties and responsibilities:</div>
            <BioLi>
              - Developed app-solutions using a variety of languages,
              frameworks, and platforms such as Express JS, Worker Service,
              ReactJS, NextJS Framework. Self-design skeleton and implement API
              for my user-story or tasks to support client-server connection.
            </BioLi>
            <BioLi>
              - Integrate with RPC and contracts from Solana Blockchain team to
              charge token, buy/sell NFT on marketplace.
            </BioLi>
            <BioLi>
              - Presented software design issues, questions, and suggestions to
              the design of features with my colleagues.
            </BioLi>
            <div style={{ marginTop: '15px' }}>Released live:</div>
            <BioLi>
              <NextLink
                href="https://dragonwar.io/"
                blank
                passHref
                scroll={false}
              >
                <Link target="_blank">
                  https://dragonwar.io
                </Link>
              </NextLink>
            </BioLi>
            <BioLi>
              <NextLink
                href="https://marketplace.dragonwar.io/"
                blank
                passHref
                scroll={false}
              >
                <Link target="_blank">https://marketplace.dragonwar.io</Link>
              </NextLink>
            </BioLi>
          </ul>
        </BioSection>
      </Section>

      <div style={{ marginTop: '2.8rem' }}>
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
export { getServerSideProps } from '../components/chakra'
