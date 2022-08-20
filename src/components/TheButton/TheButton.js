import React from 'react'
import { useDispatch }from "react-redux"
import { setContent } from "../../store/counter"
import {useSelector} from 'react-redux';
import './TheButton.css'
import {useNavigate} from "react-router-dom";

const TheButton = () => {
    const dispatch = useDispatch()
    const content= useSelector(state => state.content.content)
    const navigate = useNavigate();

const clickButton = ()=>{
    dispatch(setContent())
    content ? 
    navigate('/', {replace: true})
    :
    navigate('/local', {replace: true})

}
  return (
    <div className="feed">
        <div className="button">        
            <label className="switch">
                <input onClick={clickButton}  type="checkbox"/>
                <span className="slider"></span>
            </label>
        </div>
        <div className="write">
            <h2>{content ? "Follow" : "Local"}</h2>
        </div>

    </div>
 )
}

export default TheButton