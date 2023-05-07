import React from 'react'
import { useSelector } from 'react-redux'

const GrandBox = () => {
    let count = useSelector((state) => state.count);
  return (
    <div>
        <h1>손자 컴포넌트{count}</h1>
    </div>
  )
}

export default GrandBox