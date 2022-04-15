const APP_KEY = 'BeesChallenge'

export function getStorageItem(key: string) {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[] | string) {
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
