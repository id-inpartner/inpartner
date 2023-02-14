import B from 'react-bootstrap/Button'
import styled from '@emotion/styled'
import { sans } from '@fonts/index'

export const Button = styled(B)`
  font-weight: bold;
  font-size: 16px;
  font-family: ${sans.style.fontFamily};
  &.btn-primary,
  &.btn-secondary {
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.6);
    }
  }
`

export default Button
