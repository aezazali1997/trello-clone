import * as React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './Button.style'
type Props = {
  txtFirst: string,
  txtSecond: string
}
const Button: React.FC<Props> = ({ txtFirst, txtSecond }) => {
  const classes = styles();
  return (
    <div>
      <Link to="#" className={classes.login}>{txtFirst}</Link>
      <Link to="#" className={classes.signup}>{txtSecond}</Link>
    </div>
  )
}

export default Button
