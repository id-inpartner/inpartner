import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

const Wrap = styled.div`
  position: relative;
`

interface AspectProps {
  readonly aspect: string
}

const Aspect = styled.div`
  padding-top: ${({ aspect }: AspectProps) => aspect};
  position: relative;
`

export interface RatioProps {
  readonly aspect: string | number
  readonly wrap?: boolean
  readonly children?: ReactNode
  readonly className?: string
}

export const Ratio: FC<RatioProps> = ({
  wrap,
  aspect,
  children,
  className,
}) => {
  const a = typeof aspect === 'number' ? `${aspect * 100}%` : aspect
  if (wrap) {
    return (
      <Wrap className={className}>
        <Aspect aspect={a}>{children}</Aspect>
      </Wrap>
    )
  }
  return (
    <Aspect className={className} aspect={a}>
      {children}
    </Aspect>
  )
}

export default Ratio
