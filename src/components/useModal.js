import {useState,useEffect} from 'react'
import data from "../assets/fake-data/projectdata.js";
const useModal = () => {
    const [selected, setSelected] = useState([])
    const [isShowing, setIsShowing] = useState(false)
     useEffect(() => {
         document.body.classList.toggle('no-scroll', isShowing);
       },[isShowing])
    

    const handleOpen = (id) => {
        setSelected(data.project.find(x => x.id===id))
        setIsShowing(true)
        
    }
    
    const handleClose = () => {
        setIsShowing(false)
        setSelected([])
    }
    return {
       isShowing,
       handleOpen,
       handleClose,
       selected,
       
    }
    
}


export default useModal
