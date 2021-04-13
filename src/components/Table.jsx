/* eslint-disable no-unused-vars */
import c from './Table.module.css'

const Table =() =>{
    return (
        <table>
        <tr>
            <th rowspan="2">Номенклатура</th>
            <th colspan="2">Начальный остаток</th>
            <th colspan="2">Приход</th>
            <th colspan="2">Расход</th>
            <th colspan="2">Конечный остаток</th>
        </tr>
        <tr>
            <td>Кол-во</td>
            <td>Сумма</td>
            <td>Кол-во</td>
            <td>Сумма</td>
            <td>Кол-во</td>
            <td>Сумма</td>
            <td>Кол-во</td>
            <td>Сумма</td>
        </tr>
        <tr>
            <td>
                name.product
            </td>
            <td>
                quantity.product
                (Initial balance)
            </td>
            <td>
                sum.product Приход
                (Initial balance)
            </td>
            <td>
                quantity.product
                (Coming)
            </td>
            <td>
                sum.product
                (Coming)
            </td>
            <td>
                quantity.product
                (Consumption)
            </td>
            <td>
                sum.product
                (Consumption)
            </td>
            <td>
                quantity.product
                (Final balance)
            </td>
            <td>
                sum.product
                (Final balance)
            </td>
        </tr>
        <tr>
            <td>
                name.other.product
            </td>
            <td>
                quantity.other.product
                (Initial balance)
            </td>
            <td>
                sum.other.product Приход
                (Initial balance)
            </td>
            <td>
                quantity.other.product
                (Coming)
            </td>
            <td>
                sum.other.product
                (Coming)
            </td>
            <td>
                quantity.other.product
                (Consumption)
            </td>
            <td>
                sum.other.product
                (Consumption)
            </td>
            <td>
                quantity.other.product
                (Final balance)
            </td>
            <td>
                sum.other.product
                (Final balance)
            </td>
        </tr>
        <tr>
            <td>
                result
            </td>
            <td></td>
            <td>sum.result.product</td>
            <td></td>
            <td>sum.result.product </td>
            <td></td>
            <td>sum.result.product</td>
            <td></td>
            <td>sum.result.product</td>
        </tr>
    </table>
    )
}


    export default Table