import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Son's homepage" />
        <meta name="author" content="Son Minh Pham" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Son Minh Pham" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cv" />
        <meta name="twitter:creator" content="@spm" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Son Minh Pham" />
        <meta name="og:title" content="Son Minh Pham" />
        <meta property="og:type" content="website" />
        <title>Son Minh Pham - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

const Layout = Main

export default Layout
