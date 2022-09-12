
import { __raf } from "@react-spring/rafz"
import { motion } from "framer-motion"

const animations ={
    initial :{opacity:1,x:-70},
    animate:{opacity:1,x:0},
    exit:{opacity:0,x:0}
  
  }
  
 
const AnimetedPagesLTR =({children})=>
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

export default AnimetedPagesLTR;