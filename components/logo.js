import Link from 'next/link'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                <Image
                    src="/images/Avatar.jpeg"
                    alt="Profile image"
                    width={480}
                    height={480}
                    style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%'
                    }}
                />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    fontSize={{sm: '22px', md: '25px'}}
                    style={{
                        marginLeft: '8px',
                        paddingTop: '2px'
                    }}
                >
                    Son Minh Pham
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
