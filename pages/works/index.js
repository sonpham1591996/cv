import {Heading, SimpleGrid, Text} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import ZoomImage from '../../components/zoom-image'
import Link from "next/link";

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
                <div style={{margin: '2rem auto'}}>
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
                <ul style={{marginLeft: '20px'}}>
                    <li>
                        <Text my={4}>
                            <Link href="https://cryptonews.com/" target="blank">
                                https://cryptonews.com/
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text my={4}>
                            <Link href="https://cryptobriefing.com/" target="blank">
                                https://cryptobriefing.com/
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text my={4}>
                            <Link href="https://bitcoinist.com/" target="blank">
                                https://bitcoinist.com/
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text>
                            <Link href="https://cointelegraph.com/" target="blank">
                                https://cointelegraph.com/
                            </Link>
                        </Text>
                    </li>
                </ul>
            </Section>
        </SimpleGrid>
    </Layout>
)

export default Works
export {getServerSideProps} from '../../components/chakra'
