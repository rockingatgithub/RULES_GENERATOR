import { useState } from 'react'
import style from './querybuilder.module.css'
import Rule from '../Rule'
import GroupQueryBuilder from '../Group'

const QueryBuilder = () => {

        const defaultGroup = {

        rules: [],
        combinator: 'OR',
        not: false,
        id: ''

    }

    const defaultRule = {

        id: '',
        field: 'firstName',
        value: '',
        oprator: '='

    }

    const [currentRule, setCurrentRule] = useState(defaultGroup)

    const [combinatorList, setCombinatorList] = useState(['AND', 'OR'])

    const [rulesList, setRulesList] = useState([])

    const [groupList, setGroupList] = useState([])

    

    

    const addRule = () => {
        setRulesList( rules =>  [ ...rules, defaultRule ] )

        currentRule.rules.push(defaultRule)
        const newRule = JSON.stringify(currentRule)
        const parsedNewRule = JSON.parse(newRule)
        setCurrentRule(parsedNewRule)
    }

    const addGroup = () => {

        setGroupList( group => [...group, defaultGroup ] )

        currentRule.rules.push(defaultGroup)
        const newRule = JSON.stringify(currentRule)
        const parsedNewRule = JSON.parse(newRule)
        setCurrentRule(parsedNewRule)

    }

    console.log("\n\n", JSON.stringify(currentRule))

    return <div className={style.mainBox}>
    
        <div> 

            <select>
                {combinatorList.map( combinator => <option value={combinator}> {combinator} </option> )}
            </select>

            <button onClick={addRule} > +Rule  </button>

            <button onClick={addGroup} > +Group </button>

            { rulesList.map( rule => <Rule fileds={rule} /> ) }

            { groupList.map(group => <GroupQueryBuilder rule={group} />) }
            
        </div>
    
    </div>

}


export default QueryBuilder