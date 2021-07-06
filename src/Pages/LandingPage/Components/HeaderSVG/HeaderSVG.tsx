import * as React from 'react'
import SVG from '@asset/character2.svg';
/* import styles */
import { styles } from './HeaderSVG.style';
/* import styles */
type Props = {
  width: number,
}
const HeaderSVG: React.FC<Props> = ({ width = 100 }) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <img src={SVG} alt="" width={width} />
    </div>
  )
}

export default HeaderSVG
