import ColumnContainer from '@components/ColumnContainer'
import Image from '@components/Image'
import { FC } from 'react'
import { Con, Items, Row, Title } from './styled'

import ugMandiri from './ug-mandiri.png'
import bankBengkulu from './bank-bengkulu.jpg'
import kimiaFarma from './kimia-farma.png'
import planInternational from './plan-international.png'
import mobiol from './mo-biol.png'
import jnk from './jnk.png'
import berdikari from './berdikari.png'
import jsn from './jsn.png'
import bkpm from './bkpm.png'
import kemenkopukm from './kemenkopukm.png'
import batan from './batan.png'
import csu from './csu.png'
import falga from './falga.svg'
import menn from './menn.webp'
import raiz from './raiz.webp'
import ifgf from './IFGF.jpg'

import bumiyasa from './bumiyasa.png'
import jasamargaSemarangBatang from './jasamarga-semarang-batang.png'
import bankIndonesia from './bank-indonesia.png'
import mandiriInvestasi from './mandiri-investasi.svg'
import bpkh from './bpkh.png'
import tmj from './tmj.png'
import jasamargaPandaan from './jasamarga-pandaan.png'
import kemenpora from './kemenpora.png'
import jerbasukimawabeya from './jerbasukimawabeya.png'
import kazuhiro from './kazuhiro.png'
import adiyasa from './adiyasa.png'
import transoptimaluhur from './transoptimaluhur.png'
import lmj from './lmj.png'
import jasasarana from './jasasarana.png'
import giz from './giz.gif'
import danareksa from './danareksa.png'
import pae from './pae.jpeg'
import tamansafarisolo from './tamansafarisolo.png'
import wiucycling from './united-bike.png'

export const Clients: FC = () => {
  return (
    <>
      <ColumnContainer>
        <Title>Our Clients</Title>
      </ColumnContainer>
      <Con>
        <Items>
          {[1, 2, 3, 4].map((v) => (
            <Row key={v} role="list">
              <Image
                width={169}
                height={46}
                src={ugMandiri}
                alt=""
                quality={100}
              />
              <Image
                width={219}
                height={50}
                src={bankBengkulu}
                alt=""
                quality={100}
              />
              <Image
                width={148}
                height={58}
                src={kimiaFarma}
                alt=""
                quality={100}
              />
              <Image
                width={156}
                height={47}
                src={planInternational}
                alt=""
                quality={100}
              />
              <Image
                width={130}
                height={48}
                src={mobiol}
                alt=""
                quality={100}
              />
              <Image
                width={217}
                height={60}
                src={bumiyasa}
                alt=""
                quality={100}
              />
              <Image width={165} height={73} src={jnk} alt="" quality={100} />
              <Image
                width={164}
                height={80}
                src={berdikari}
                alt=""
                quality={100}
              />
              <Image width={134} height={74} src={jsn} alt="" quality={100} />
              <Image width={132} height={101} src={bkpm} alt="" quality={100} />
              <Image
                width={131}
                height={101}
                src={kemenkopukm}
                alt=""
                quality={100}
              />
              <Image width={96} height={99} src={batan} alt="" quality={100} />
              <Image width={80} height={80} src={csu} alt="" quality={100} />
              <Image
                width={180}
                height={66}
                src={falga}
                alt=""
                quality={100}
                placeholder="empty"
              />
              <Image
                width={144 * 1.1}
                height={48 * 1.1}
                src={menn}
                alt=""
                quality={100}
              />
              <Image
                width={128 * 1.5}
                height={37 * 1.5}
                src={raiz}
                alt=""
                quality={100}
              />
              <Image
                width={256 * 0.6}
                height={102 * 0.6}
                src={ifgf}
                alt=""
                quality={100}
              />
            </Row>
          ))}
        </Items>
      </Con>
      <Con>
        <Items className="last">
          {[1, 2, 3, 4].map((v) => (
            <Row key={v} role="list" className="last">
              <Image
                width={227}
                height={68}
                src={jasamargaSemarangBatang}
                alt=""
                quality={100}
              />
              <Image
                width={137}
                height={75}
                src={bankIndonesia}
                alt=""
                quality={100}
              />
              <Image
                width={142}
                height={70}
                src={mandiriInvestasi}
                alt=""
                quality={100}
                placeholder={null}
              />
              <Image width={158} height={59} src={bpkh} alt="" quality={100} />
              <Image width={141} height={65} src={tmj} alt="" quality={100} />
              <Image
                width={227}
                height={59}
                src={jasamargaPandaan}
                alt=""
                quality={100}
              />
              <Image
                width={78}
                height={90}
                src={kemenpora}
                alt=""
                quality={100}
              />
              <Image
                width={73}
                height={99}
                src={jerbasukimawabeya}
                alt=""
                quality={100}
              />
              <Image
                width={96}
                height={84}
                src={kazuhiro}
                alt=""
                quality={100}
              />
              <Image
                width={99}
                height={99}
                src={adiyasa}
                alt=""
                quality={100}
              />
              <Image
                width={128}
                height={104}
                src={transoptimaluhur}
                alt=""
                quality={100}
              />
              <Image width={105} height={103} src={lmj} alt="" quality={100} />
              <Image
                width={99}
                height={99}
                src={jasasarana}
                alt=""
                quality={100}
              />
              <Image
                width={236 * 0.9}
                height={62 * 0.9}
                src={giz}
                alt=""
                quality={100}
                placeholder="empty"
              />
              <Image
                width={256 * 0.86}
                height={64 * 0.86}
                src={danareksa}
                alt=""
                quality={100}
              />
              <Image
                width={118 * 0.61}
                height={164 * 0.61}
                src={pae}
                alt=""
                quality={100}
              />
              <Image
                width={96}
                height={96}
                src={tamansafarisolo}
                alt=""
                quality={100}
              />
              <Image
                width={600 / 5}
                height={419 / 5}
                src={wiucycling}
                alt=""
                quality={100}
              />
            </Row>
          ))}
        </Items>
      </Con>
    </>
  )
}

export default Clients
