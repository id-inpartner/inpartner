import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'
import Ratio from 'react-bootstrap/Ratio'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
`

const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 32px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
    margin-bottom: 60px;
  }
`

export const Sitemap = () => {
  return (
    <Root>
      <Title>Site Map</Title>
      <Ratio aspectRatio={450 / 600}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.672129927412!2d106.8392733!3d-6.2084639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f381f9f1b899%3A0xcf6bf4193c4d2ace!2sPT%20Inpartner%20Optima%20Integra%20(INPARTNER)!5e0!3m2!1sen!2sid!4v1671699893441!5m2!1sen!2sid"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PT Inpartner Optima Integra"
        />
      </Ratio>
    </Root>
  )
}

export default Sitemap
