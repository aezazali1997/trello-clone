import * as React from 'react';
import { styles } from './Logo.style';
import { Link } from 'react-router-dom'
type Props = {
  size: number,
  iconSize: number,
  color?: string,
  iconColor?: string,
  weight?: number
}
const Logo: React.FC<Props> = ({ size, color = 'black', iconSize, iconColor = 'black', weight = 600 }) => {
  const classes = styles();
  return (
    <Link to="#" className={classes.wrapper}>
      <span className="fa fa-trello" style={{ color: iconColor, fontSize: iconSize }}></span>
      <span style={{ fontSize: size, color: color, fontWeight: weight }}>Trello</span>
    </Link>
  )
}

export default Logo
