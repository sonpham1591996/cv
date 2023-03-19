import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import ZoomImage from '../../components/zoom-image'

const Works = () => (
  <Layout title="Works">
    <SimpleGrid>
      <Section>
        <Heading as="h3" variant="section-title" mt={8}>
          CNotion
        </Heading>
        <Text>Track your connected wallet, support for Metamask wallet.</Text>
        <Text>
          - Backend: NodeJS, ExpressJS, MongoDB, Redis, Agenda Worker Jobs
        </Text>
        <Text>- Frontend: NextJS, Web3 (Metamask)</Text>

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

      <Section>
        <Heading as="h3" variant="section-title" mt={8}>
          RadaChain News
        </Heading>
        <Text>
          Collect all cryptocurrencies news from popular providers like:{' '}
        </Text>
        <ul style={{ marginLeft: '20px' }}>
          <li>
            <Text my={4}>
              <a href="https://cryptonews.com/" target="blank">
                https://cryptonews.com/
              </a>
            </Text>
          </li>
          <li>
            <Text my={4}>
              <a href="https://cryptobriefing.com/" target="blank">
                https://cryptobriefing.com/
              </a>
            </Text>
          </li>
          <li>
            <Text my={4}>
              <a href="https://bitcoinist.com/" target="blank">
                https://bitcoinist.com/
              </a>
            </Text>
          </li>
          <li>
            <Text>
              <a href="https://cointelegraph.com/" target="blank">
                https://cointelegraph.com/
              </a>
            </Text>
          </li>
        </ul>
        <Text my={8} style={{ fontWeight: 'bold' }}>
          Link:{' '}
          <a href="https://radachain-news.up.railway.app/" target="blank">
            https://radachain-news.up.railway.app/
          </a>
        </Text>
      </Section>
    </SimpleGrid>
  </Layout>
)

export default Works
export { getServerSideProps } from '../../components/chakra'
