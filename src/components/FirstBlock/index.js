import React, { useState, useRef } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './index.css';
import { putUserData } from '../../helpers/queries';

const FirstBlock = ({ userData }) => {

    const [viewMode, setMode] = useState(true)
    const [blockData, setUserData] = useState(userData)

    const salaryInput = useRef(null)
    const expYearsInput = useRef(null)
    const expMonthsInput = useRef(null)
    const conditionsSelect = useRef(null)

    const changeMode = () => {
        if (!viewMode) {
            const salary = salaryInput.current.value
            const years = expYearsInput.current.value
            const months = expMonthsInput.current.value
            const conditions = conditionsSelect.current.state.value
 
            if (!isNaN(salary) && !isNaN(+years) && !isNaN(months) && salary>=0 && years>=0 && months>=0 && conditions !== null) {
                setUserData({
                ...blockData,
                salary: salary,
                exp: Number(years) * 12 + Number(months),
                conditions: conditions.map(item => {return item.value})
                })
                setMode(!viewMode)
                putUserData(blockData)
            } else {alert ('Введите корректные данные')}
        } else {
            setMode(!viewMode)
        }
    }

    const expPrint = (exp) => {
        if (exp === 0) { 
            return 'Без опыта работы'
        } else {
            const expYears = Math.floor(exp/12)
            const expMonths = exp % 12
            let expYearPrint = ''
            let expMonthPrint = ''
    
            if (expYears !== 0) {
                if (expYears >= 5 && expYears <= 20) {
                    expYearPrint = expYears + ' лет'
                } else {
                    const count = expYears % 10
                    if (count === 1) {
                        expYearPrint = expYears + ' год'
                    } else if (count >= 2 && count <= 4) {
                        expYearPrint = expYears + ' годa'
                    } else {
                        expYearPrint = expYears + ' лет'
                    }
                }
            }

            if (expMonths !== 0) {
                if (expMonths >= 5) {
                    expMonthPrint = expMonths + ' месяцев'
                } else if (expMonths < 5 && expMonths >= 2) {
                    expMonthPrint = expMonths + ' месяца'
                } else {
                    expMonthPrint = expMonths + ' месяц'
                } 
            }
            return expYearPrint+' '+expMonthPrint
        }
    }

    const conditionsPrint = (cond) => {
        let str = ''
        cond.forEach((element,i) => {
            if (i === cond.length-1) {
                str = str + element
            } else {
                str = str + element +', '
            }
        });
        return str
    }

    const selectOptions = [
        { value: 'полная занятость', label: 'Полная занятость' },
        { value: 'частичная занятость', label: 'Частичная занятость' },
        { value: 'удаленная работа', label: 'Удаленная работа' },
        { value: 'подработка', label: 'Подработка' }
      ]

    return (
        <div className='firstblock'>
            <div className='firstblock__header'>
                <div className='header-prof'>UX/UI designer
                
                </div>
                <button className='header-btn' onClick={()=>changeMode()}>{viewMode ? 'Изменить' : 'Сохранить'}</button>
            </div>
            <div className='firstblock__data'>
                <div className='datablock'>
                    <span className='datablock-desc'>Ожидаемая зарплата</span>
                    <div className={viewMode ? 'datablock-value view' : 'datablock-value'}>
                        {viewMode  
                            ? Intl.NumberFormat('ru-RU').format(blockData.salary)
                            : <input type='text' ref={salaryInput} size='6' />
                        }
                    &nbsp;руб.</div>
                </div>
                <div className='datablock'>
                    <span className='datablock-desc'>Опыт работы</span><div className={viewMode ? 'datablock-value view' : 'datablock-value'}>
                        {viewMode
                            ? expPrint(blockData.exp)
                            : <div><input type='text' ref={expYearsInput} size='3'/> лет<input type='text' pattern='[0-9]*' ref={expMonthsInput} size='3'/> месяцев</div>
                        }
                    </div>
                </div>
                <div className='datablock'>
                    <span className='datablock-desc'>Условия</span><div className={viewMode ? 'datablock-value view' : 'datablock-value'}>
                        {viewMode
                            ? conditionsPrint(blockData.conditions)
                            : <Select 
                                isMulti name='conditions'
                                options={selectOptions} 
                                className='basic-multi-select'
                                classNamePrefix='select'
                                placeholder='Выберите...'
                                ref={conditionsSelect} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

FirstBlock.propTypes = {
    userData: PropTypes.object.isRequired
}

export default FirstBlock
