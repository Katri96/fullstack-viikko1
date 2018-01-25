import React from 'react'
import { Osa } from './Osa'

export const Sisalto = (props) => {
    return (
    <div>
    <Osa sisalto={props.osat[0] } />
    
    <Osa sisalto={props.osat[1]} />
 
    <Osa sisalto= {props.osat[2]} />
   
    </div>
)
}