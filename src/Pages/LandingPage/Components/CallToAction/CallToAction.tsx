import * as React from 'react'
import classNames from 'classnames';
import HeaderSVG from '../HeaderSVG/HeaderSVG';
import dashboard from '@images/test.jpg'
import workWithImage from '@images/test2.jpg'
import { styles } from './CallToAction.style';
function CallToAction() {
  const classes = styles();
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>Trello helps team move work forward.</h2>
          <p>Colloborate,manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique. Accomplish it with trello</p>
          <form className={classes.form}>
            <input type="email" placeholder="Email" />
            <button type="submit" className={classes.signup}>Sign up. It’s Free &#33;</button>
          </form>
        </div>
        <HeaderSVG width={300} />
      </div>
      <div className={classNames(classes.containerTwo)}>
        <h2>It’s more than work. It’s a way of working together.</h2>
        <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
        <form>
          <button type="submit" className={classes.startDoing}>Start Doing &rarr;</button>
        </form>
        <img className={classes.img} src={dashboard} alt="trello board" />
        <p className={classes.imageCaptionText}>Join over 1,000,000 teams worldwide that are using Trello to get more done.</p>
        <img src={workWithImage} alt="" />
      </div>
    </div>
  )
}

export default CallToAction
