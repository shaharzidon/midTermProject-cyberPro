
import { __raf } from "@react-spring/rafz"
import { motion } from "framer-motion"

const animations ={
    initial :{opacity:1,x:100},
    animate:{opacity:1,x:0},
    exit:{opacity:0,x:0}
  
  }
  
 
const AnimetedPagesRTL =({children})=>
{
    return(
        <motion.div variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration:0.7}}
       
        >
        {children}
        </motion.div>
    )
}

export default AnimetedPagesRTL;