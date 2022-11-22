import { AvisoMaria } from "./subPages/questoes"

export default function Principal(){

    return (
       <div>
          <h1>Nova Página</h1>
          <MariaPrea/>
          <AvisoMaria/>
       </div>
    )
}

export function MariaPrea(){

   return (
      <h2>Morreu Maria Preá...</h2>
   )
}