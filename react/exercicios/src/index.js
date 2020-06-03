import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paula" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div>,
    document.getElementById('root'))
// import Saudacao from './componentes/Saudacao'
// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>,
//     document.getElementById('root'))
// import Mult, { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Mult.BoaTarde none="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
//     , document.getElementById('root'))
