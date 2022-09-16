import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import ZoomImage from '../../components/zoom-image'

const Works = () => (
  <Layout title="Works">
    <SimpleGrid>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          CNotion
        </Heading>
        <Text>Track your connected wallet, support for Metamask wallet.</Text>
        
        <div style={{ margin: '2rem auto' }}>
          <ZoomImage
            src="/images/portfolio.png"
            width="100%"
            height="300px"
            alt="portfolio"
          />
        </div>

        <div>
          <ZoomImage
            src="/images/transaction-history.png"
            width="100%"
            height="300px"
            alt="transaction-history"
          />
        </div>
      </Section>
    </SimpleGrid>
  </Layout>
)

export default Works
export { getServerSideProps } from '../../components/chakra'
