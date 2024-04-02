export const useLanguage = () => useState<string>('language', () => 'hk')



const enduring: { [key: string]: () => Ref<any> } = {
  useLanguage
}


export const setLocal = (key?: string) => {
  if (key) {
    const useKey = 'use' + key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()
    const func = enduring[useKey]
    const state = useState()
    state.value = key
    localStorage.setItem('key', JSON.stringify(func().value))
  } else {
    for (const key in enduring) {
      if (Object.prototype.hasOwnProperty.call(enduring, key)) {
        const elemnt = enduring[key]
        const setKey = key.toLowerCase().substring(3)
        try {
          localStorage.setItem(setKey, JSON.stringify(elemnt().value))
        } catch {
          console.log('setLocal error')
        }
      }
    }
  }
}


export const getLocal = () => {
  for (const key in enduring) {
    if (Object.prototype.hasOwnProperty.call(enduring, key)) {
      const elemnt = enduring[key]
      const setKey = key.toLowerCase().substring(3)
      try {
        const localData = localStorage.getItem(setKey) || ''
        if (localData) {
          elemnt().value = JSON.parse(localData)
        }
      } catch {
        console.log('getLocal error')
      }
    }
  }
}