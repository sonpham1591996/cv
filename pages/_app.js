import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { withPasswordProtect } from 'next-password-protect'

if (typeof window !== 'undefined') {
  // Back off, browser, I got this...
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

// Before: export default App;
export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(Website, {
      loginApiUrl: '/api/login'
    })
  : Website
