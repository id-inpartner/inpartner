import Image from '@components/Image'
import employees from './employees'
import { Aspect, Card, Container, Dummy, Name, Pos } from './styled'

export const Employee = () => {
  return (
    <Container>
      {employees.map((it, i) => (
        <Card key={i} aria-hidden={it.h}>
          <Aspect>
            <Image src={it.src} fill quality={100} alt="" />
          </Aspect>
          <Name>{it.name}</Name>
          <Pos>{it.pos}</Pos>
        </Card>
      ))}
      <Dummy aria-hidden />
      <Dummy aria-hidden />
    </Container>
  )
}
