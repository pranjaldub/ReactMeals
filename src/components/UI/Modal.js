import classes from '../UI/Modal.module.css'
import { Fragment } from 'react'

//for using built in create portal method of react, we  will import ReacDOM
import ReactDom from 'react-dom'
//component for backdrop
const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.hideCart}></div>
}

//component for overlay
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

//main component -- we will use portal here
const Modal = props => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop hideCart={props.hideCart} ></Backdrop> , document.getElementById('overlays'))}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,  document.getElementById('overlays'))}
    </Fragment>
}
export default Modal