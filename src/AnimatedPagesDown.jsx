
import { __raf } from "@react-spring/rafz"
import { motion } from "framer-motion"

const animations ={
    initial :{opacity:0,y:-100},
    animate:{opacity:1,y:0},
    exit:{opacity:1,y:0}
  
  }
  
 
const AnimetedPagesDown =({children})=>
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

export default AnimetedPagesDown;