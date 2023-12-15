export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein 'e' ist, wird nichts angehängt.
if (currentElement=== 'e' ) {
  result.push ("")
  // Wenn das aktuelle Zeichen ein 'E' ist, wird nichts an die Liste angehängt.
} else if (currentElement === 'E') {
  result.push("")
}
else { // Das aktuelle Zeichen ist weder ein 'e' noch ein 'E', daher wird das aktuelle Zeichen angehängt.
    result.push(currentElement)
  }
}
  return result.join("")
  
}


export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Das aktuelle Element in einen Grossbuchstaben umwandeln.
    const capitalizedElement = currentElement.toUpperCase()

    // Der Grossbuchtaben wird an das Resultat angehängt.
    result.push (capitalizedElement)
  }
  return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = [] 
  let count = 0 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  // Mit dem Code wird überprüft, ob ein "e" enthalten ist.

  if (currentElement=== 'e' ) {
   count = count + 1 
  }

  //Soll grosses 'E' zählen
  if (currentElement=== 'E') {
    count = count + 1 
  }

  }
  return count
}


export function aufgabe04 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  // Soll 4 Wörter zählen



    
  }
  return result.join("")
}

export function aufgabe05(args) {
  const input = args
    const result = []
  let capitalLetters = 0
   
   
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
   
  //Erkenne ein Grossbuchstaben
  if (currentElement=== ".") {}
  else if (currentElement===" "){}
   
  //Erkenne mehrere Grossbuchstaben 
  else if (currentElement === currentElement.toUpperCase())
  {capitalLetters++}
  }
  // Erkenne den Grossbuchstaben, auch wenn er nicht gross geschrieben ist.
  if (capitalLetters > 0) {
    return true
  } else {
     return false
  }
  // Sollte keine Sonderzeichen enthalten
  
   
  }



      export function aufgabe06 (args) {
        const input = args
        
        
        for (let i = 1; i < input.length; i++) {
          const currentElement = input[i]
          const ascii = currentElement.charCodeAt(0)
          if (48<= ascii && ascii <= 57) {
            // mache nichts; ist eine Zahl
    
          } else if (65<= ascii && ascii <= 90) {
            // mache nichts; ist A-Z

          }else if (97<= ascii && ascii <= 122) {
            // mache nichts; ist a-z

          }else if (currentElement=== " ") {

          


          } else {
            return true
          }
        }
        return false
      }
    
  
   

  export function aufgabe07 (args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

    // Wird getestet, ob das Wort "und" im Text enthalten ist.
      if(currentElement === "u") {
        if (input[i+1]=== "n") {
          if (input[i+2]=== "d") {
            return true 
          }
        }
      }
    }
    return false // Wenn kein "und" im Text enthalten ist, ist die Aussage falsch und es wird abgebrochen.
  }




  export function aufgabe08 (args) {
    const input = args
    const result = [] // Dies heisst, dass die Liste leer noch ist.

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Alle e's werden umgetauscht zu einer 3.
      if (currentElement=== "e") {
        result.push (3)

        // Die Zeichen, die keine e's sind, werden einfach normal aufgeschrieben in der Liste.
      }
      else {
        result.push (currentElement)
    }
      // Mit dem return result.join ("") werden die einzelnen Teile zusammengehängt. Zu einem Text oder Wort.
    }
    
    return result.join("")
  }




  export function aufgabe09 (args) {
    const input = args
    let len = 0 // Bedeutet das, es von vorne anfängt mit dem zählen.
    for (let i = 0; i < input.length; i++) {
      len++
    }
    // Dieser Code soll prüfen, ob es exakt sechs Zeichen lang ist.
    if (len === 6) {
      return true
    } else {
      return false // Wenn nicht wird es abgebrochen und daher zählt es als falsch.
    }
  }

  export function aufgabe10 (args) {
    const input = args
    // Soll schauen, ob die gewisse Eingabe ein korrekter RGB Hexcode ist.
    if (input.length !== 7) return false
    if(input [0] !== "#") return false
    
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)

      if (48<= ascii && ascii <= 57) {
        // mache nichts; ist eine Zahl

      } else if (65<= ascii && ascii <= 70) {
        // mache nichts; ist A-F
      } else {
        return false
      }
    }
    return true
  }
    
  
  export function aufgabe11 (args) {
    const input = args
    const result = []
    let ascii = -1
if (input.length > 1) { // Funktionswächter (Wenn es mehr als nur 1 Bustaben hat, dann wird somit, durch das return null angegeben, dass es sich nicht um ein ascii code handelt.)
  return null 
}

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Es soll den ascii code eines einzelnen Buchstabens geben.
      ascii = currentElement.charCodeAt(0)
      return ascii
    }

    return null
  }


  export function aufgabe12 (args) {
    const input = args
    const result = []

    let pos= 0
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //Die Position des erstes e's wird damit gesucht/gefunden.
     
      if(currentElement === 'e') {
        return pos
    }
    pos = pos + 1 // pos bedeutet Position.Damit meint man das man jede Position prüft.
  }
    return -1 
  }

  export function aufgabe13 (args) {
    const input = args
    const result = []

    let positionOfLastE = - 1 

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
     // Soll das letzte e erkennen.
      if (currentElement === "e") {
        positionOfLastE = i // Bedeutet letzte Position 
      }
    }

    return positionOfLastE
  }

  export function aufgabe14 (args) {
    const input = args
    const result = []
  
      let countE = 0 // Damit ist gemeint, dass es von vorne also von Anfang anfangen soll zu zählen.


      for (let i = 0; i < input .length; i++) {
        const currentElement = input[i]

// Finde heraus in welcher Position das dritte "e" ist
      if (currentElement === 'e') {
          countE++
        if (countE === 3) {
         return i // gibt die letzte Position an, wo sich das letzte e befand.
     
          }
        }
      }
      return -1 // Da man kein drittes e gefunden hat, schreibt man return -1.
     
    }

    export function aufgabe15(args) {
      const input = args
      const result = []
    
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
    
    // Erkenne das Leerzeichen   
    if (currentElement=== ' ' ) {
    return result.join("")
      
    }
    // Falls kein Leerzeichen vorhanden ist; keine Unterbrechungen 
        result.push(currentElement)
    
    }
      return result.join("")
      
    }
  
    export function aufgabe16 (args) {
      const input = args
      const result = []

      
      return result.join("")
    }


    export function aufgabe17(args) {
      const input = args
      const result = input.split(',')
     // Die Einträge werden von einem "," getrennt. Innerhalb der Liste.
      for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i;j++){
          if (result[j] > result[j + 1]) {
     
            [result[j], result[j + 1]] = [result[j + 1], result[j]]
          }
        }
       
      }
      return result.join(',')
    }

      
   export function aufgabe19(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Die Zeichen werden verdoppelt.
      result.push(currentElement)
      result.push(currentElement)
    }
    return result.join("")
  }

  export function aufgabe20 (args) {
    const input = args
    const result = []
   
   
    for(let i =0; i < input.length; i++) {
      const currentElement = input[i]
   
      // Es soll prüfen, ob nach jedem "." ein Leerschlag auftritt.
      if (currentElement === ".") {
        if (input[i+1] === " ")  {
          return true
        }
   
      }
   
  }
    return false
  }
 export function aufgabe21 (args) {
  const input = args
  const result = []
  
  return result.join("")
 }

 export function aufgabe22 (args) {
  const input = args
  const result = []
  
  return result.join("")
 }

 export function aufgabe23 (args) {
  const input = args
  const result = []
  
  return result.join("")
 }

 export function aufgabe24 (args) {
  const input = args
  const result = []
  
  return result.join("")
 }

 export function aufgabe25 (args) {
  const input = args
  const result = []
  
  return result.join("")
 }
  export function aufgabe26 (args) {
  const list = args.split("") 
// Mit dem Code wird der text in einer Liste umgeformt, um somit die Elemente zu wechseln.
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]


      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      //Die Elemente sollte durch den Code vertauscht werden.
    const tmp = list[i+1]
    list[i+1] = list[i]
    list[i] = tmp

    i = 0 //Soll dadurch nochmals vom Anfang aus starten.
     }
    }
   
    const result = list.join("")
    return (result)
  }
export function aufgabe28 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

      export function bubbleSort (args) {

        const text = args
        const list = text.split("") // Mit diesem Code wandle ich den Text um, somit kann das Element vertauscht werden 
                                       
                                  

        for (let i = 0; i < list.length - 1; i++) {
          const currentElement = list[i]
          const nextElement = list[i + 1]
          if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
          // Elemente müssen vertauscht werden, da die Reihenfolge nicht korrekt ist.


            const tmp = list[i + 1]

            list[i + 1] = list[i]

            list[i] = tmp
            i = -1 // von vorne anfangen.
          }
        }

        const result = list.join("")
        console.log(result)

        return result 

      }
      
    