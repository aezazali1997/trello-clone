import { createUseStyles } from "react-jss";
import { LightenDarkenColor } from "@shared/LightenColor";
export const styles=createUseStyles({
  login:{
    background:'transparent',
    color:'#0165ff',
    padding:'.3rem',
    textTransform:'capitalize',
    textDecoration:'none',
    marginRight:".3rem",
    "&:hover":{
      textDecoration:"underline"
    },
  },
  signup:{
    background:"#0165ff",
    textDecoration:'none',
    color:'white',
    padding:'.3rem .4rem',
    borderRadius:6,
    "&:hover":{
      background:LightenDarkenColor("#0165ff",20),
    }
  }
})
