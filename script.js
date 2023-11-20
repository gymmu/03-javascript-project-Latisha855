export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein 'e' ist, hänge nichts an die Liste an
if (currentElement=== 'e' ) {
  result.push ("")
  // Wenn das aktuelle Zeichen ein 'E' ist, hänge nichts an die Liste an
} else if (currentElement === 'E') {
  result.push("")
}
else { // Das aktuelle Zeichen ist weder ein 'e' noch ein 'E', hänge also das aktuelle Zeichen
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

    // Wandle das aktuelle Element in einen Grossbuchstaben um
    const capitalizedElement = currentElement.toUpperCase()

    // Hänge das Grossbuchstaben an das Resultat an...
    result.push(capitalizedElement)
  }
  return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = [] 
  let count = 0 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  // Können Sie überprüfen,ob ein 'e' enthalten ist

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

  // Können Sie 4 Wörter zählen



    
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
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      // Wandle das aktuelle Element in einen Grossbuchstaben um
      const capitalizedElement = currentElement.toUpperCase()
  
      // Hänge das Grossbuchstaben an das Resultat an...
      result.push(capitalizedElement)
      if(currentElement==="" ) {}
    }
    return result.join("")
  }
  
   

  export function aufgabe07 (args) {
    const input = args
    const result = []
  
    
    return result.join("")
  }

  export function aufgabe08 (args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement=== "e") {
        result.push (3)

      }
      else {
        result.push (currentElement)
    }
      
    }
    
    return result.join("")
  }


  export function aufgabe09 (args) {
    const input = args
    let len = 0
    for (let i = 0; i < input.length; i++) {
      len++
    }

    if (len === 6) {
      return true
    } else {
      return false
    }
  }

  export function aufgabe10 (args) {
    const input = args
    
    if (input.length !== 7) return false
    if(input [0] !== "#") return false
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      const asscii = currentElement.charCodeAt
      if (48<= ascii && ascii <= 57) {
        // mache nichts; ist eine Zahl

      } else if (65<= ascii && ascii <= 70) {
        // mache nichts; ist A-F
      } else {
        return false
      }
    }
  }
    
  
  export function aufgabe11 (args) {
    const input = args
    const result = []
    let ascii = -1
if (input.length > 1) { // Funktionswächter
  return null 
}

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      ascii = currentElement.charCodeAt(0)
      return ascii
    }

    return null
  }

  export function aufgabe12 (args) {
    const input = args
    const result = []

    let pos= -1
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      pos = pos + 1
      if(currentElement === 'e') {
        return pos
    }
  }
    return -1 
  }

  export function aufgabe13 (args) {
    const input = args
    const result = []

    let positionOfLastE = - 1 

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (currentElement === "e") {
        positionOfLastE = i
      }
    }

    return positionOfLastE
  }

  export function aufgabe14 (args) {
    const input = args
    const result = []
  
      let countE = 0


      for (let i = 0; i < input .length; i++) {
        const currentElement = input[i]


      if (currentElement === 'e') {
          countE++
        if (countE === 3) {
         return i
     
          }
        }
      }
      return -1
     
    }
  