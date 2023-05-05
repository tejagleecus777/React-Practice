import React from 'react'

import "./index.css"

const KPICards = ({totalCards,cardsForRow,clickCard}) => {
  return (
    <div>
        <div className={cardsForRow === 2 ? 'kpi-main kpi-main-div-2' : (cardsForRow ===4 ? 'kpi-main kpi-main-div-4' : 'kpi-main kpi-main-div-1')}>
        { totalCards?.map((card) =>{
            return <div className='kpi-card' onClick={clickCard && clickCard}>
                <p className='pb-2'>{card.cardName}</p>
                <p>{card.cardValue}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default React.memo(KPICards);