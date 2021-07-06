import { createUseStyles } from "react-jss";
import {LightenDarkenColor} from '@shared/LightenColor'
export const styles=createUseStyles({
  wrapper:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:"1rem",
  },
  container:{
    padding:".5rem",
    width:"90%",
    textAlign:'center',
    marginTop:'.5rem',
    "& h2":{
      fontSize:"2.1rem",
      marginBottom:0,
    },
    "& p":{
      fontSize:"1.2rem"
    },
  },
  form:{
    display:'flex',
    flexDirection:"column",
    marginTop:'3rem',
    "& input":{
      display:'none',
    }
  },
  signup:{
    background:"#0165ff",
    border:'none',
    cursor:"pointer",
    color:"#fff",
    padding:"8px 0",
    textDecoration:'none',
    borderRadius:6,
    fontSize:'1.2rem',
    width:'100%',
    display:'block',
    textAlign:'center',
    "&:hover":{
      background:LightenDarkenColor("#0165ff",20),
    }
  },

  containerTwo:{
    padding:".5rem",
    textAlign:'center',
    width:'90%',
    margin:"5rem auto 0 auto",
    "& h2":{
      fontSize:"1.3rem",
    },
  },
  startDoing:{
    cursor:"pointer",
    fontSize:'1.2rem',
    color:"#0165ff",
    background:"transparent",
    border:'1px solid #0165ff',
    borderRadius:6,
    padding:"7px 14px",
    width:'auto',
    display:"inline-block",
    transition:'all .3s ease-in-out',
    "&:hover":{
      background:"#0165ff",
      color:"#fff",
    }
  },
  img:{
    display:"block",
    width:"100%",
    margin:"2rem auto",
    boxShadow: "6px 8px 25px 1px rgba(0,0,0,0.56)"
  },
  imageCaptionText:{
    marginTop:"1.5rem",
    fontSize:"1.4rem",

  },
  "@media (min-width:768px)":{
    container:{
      textAlign:"left",
      "& h2":{
        fontSize:'2.6rem',
      }
    },
    form:{
      flexDirection:"row",
      "& input":{
        display:'block',
        fontSize:'1rem',
        paddingLeft:10,
        width:'50%',
        marginRight:"1rem",
        borderRadius:6,
        border:"1px solid rgba(0,0,0,.2)",
      },
      "& button":{
        width:'50%'
      }
    },
    containerTwo:{
      marginTop:'8rem',
      width:"80%",
      "& h2":{
        fontSize:"1.9rem",
      }
    },
  },
  "@media (min-width:992px)":{
    container:{
      width:'40%',
    },
    containerTwo:{
      width:"60%",
      marginTop:"9rem",
    }
  },
});