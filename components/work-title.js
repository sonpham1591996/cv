import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const WorkTitle = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export default WorkTitle
