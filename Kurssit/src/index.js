import React from 'react'
import ReactDOM from 'react-dom'
import { Otsikko } from './Otsikko'
import { Yhteensa } from './Yhteensa'
import { Sisalto } from './Sisalto'
import { Osa } from './Osa'


const App = () => {
  const kurssi= {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
          {
              nimi:'Reactin perusteet',
              tehtavia: 10
          },
          {
              nimi: 'Tiedonvälitys propseilla',
              tehtavia: 7
          },
          {
              nimi: 'Komponenttien tila',
              tehtavia: 14
          }
      ]
    }


  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat} />
    </div>
  )


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)