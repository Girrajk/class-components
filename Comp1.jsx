// import React from 'react'

// function Comp1(props) {
//     props.name = "Chirag"
//   return (
//     <div>
//     {props.name}
    
//     </div>
//   )
// }

// export default Comp1

import React,{useState} from 'react'

function Comp1() {
    const [name, setName] = useState("prashant");
  return (
    <div>
        <p>{name}</p>
        <button onClick={()=> setName("Chirag")}>Change Name</button>
    </div>
  )
}

export default Comp1