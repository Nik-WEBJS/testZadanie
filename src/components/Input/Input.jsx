/* eslint-disable no-unused-vars */
import React from 'react'
import c from './Input.module.css'

 

const Input = () => {
    return (
        <div>
            <table className={c.input_table}>
            <tr>
            <th className={c.item_input}>Data (xx.xx.xx) <input></input></th>
            <th className={c.item_input}>KontrAgent.name <input></input></th>
            <th className={c.item_input}>Item.name <input></input></th>
            <th className={c.item_input}>Quantity <input></input></th>
            <th className={c.item_input}>Sum (1Item) <input></input></th>
        </tr> 
        <button>Добавить</button>
            </table>
        </div>
    )
}

export default Input