import React, {useState, useEffect} from 'react'

export default function PayerList() {
  
  const [payers, setPayers] = useState([])
  
  const fetchData = () => {
      fetch('http://localhost:8080/payers')
      .then(response => {
          return response.json()
      })
      .then(data => {
          setPayers(data)
      })
  }

  useEffect(() => {
      fetchData()
  }, [])

    return (
    <div>{payers.length > 0 && (
        <table>{payers.map(payer => (
            <tr>
                <td>{payer.name}</td>
                <td>{payer.points}</td>
            </tr>
        ))}</table>
    )}</div>
  )
}


