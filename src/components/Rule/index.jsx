import { useState } from "react"

const Rule = () => {

    const [fieldOptions, setFieldOptions] = useState([ 'FirstName', 'LastName', 'Age', 'Gender'  ])

    const [operatorsList, setOperatorsList] = useState(['=', '!=', '>', '<', 'in'])

    const [comparisonValue, setComparisonValue] = useState('')

    return <div>

        <select>
            { fieldOptions.map( option => <option value={option}> {option} </option>)}
        </select>

        <select> 
            { operatorsList.map( operator => <option value={operator} > {operator} </option> ) }   
        </select>

        <input value={comparisonValue} onChange={event => setComparisonValue(event.target.value)} />

    </div>

}


export default Rule