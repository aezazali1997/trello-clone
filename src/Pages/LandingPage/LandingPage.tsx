import * as React from 'react'
import Logo from '@shared/Logo/Logo'
import Button from './Components/Button/Button'
import { styles } from './LandingPage.style';
import CallToAction from './Components/CallToAction/CallToAction';
const LandingPage = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Logo size={35} color="black" iconSize={30} iconColor="blue" weight={900} />
        <Button txtFirst="Login" txtSecond="Sing up" />
      </div>
      <CallToAction />
    </div>
  )
}

export default LandingPage
