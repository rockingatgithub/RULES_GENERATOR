import { useState } from 'react'
import style from './group.module.css'
import Rule from '../Rule'

const GroupQueryBuilder = ({group}) => {

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

    const [currentRule, setCurrentRule] = useState(group)

    const [combinatorList, setCombinatorList] = useState(['AND', 'OR'])

    const [rulesList, setRulesList] = useState([])

    const [groupList, setGroupList] = useState([])

    const addRule = () => {
        setRulesList( rules =>  [ ...rules, defaultRule ] )

        group.rules.push(defaultRule)
        setCurrentRule(group)
    }

    const addGroup = () => {

        setGroupList( group => [...group, defaultGroup ] )

        group.rules.push(defaultGroup)
        setCurrentRule(group)

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


export default GroupQueryBuilder