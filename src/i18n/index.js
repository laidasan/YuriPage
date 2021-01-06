import { messages } from '../locale/tw'
import { createI18n } from 'vue-i18n'

let instance = null

export const i18n = (locale = 'tw') => {
  if (instance == null) {
    instance = createI18n({
      locale,
      messages
    })
  }
  return instance
}
