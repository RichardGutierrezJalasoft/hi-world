import { EnglishGreeting, SpanishGreeting } from "../data/greeting";
import { EnglishText, SpanishText } from "../data/textLanguaje";
import { listLanguagesEnglish, listLanguagesSpanish } from "../data/languages";
const checkIfInputsAreEmpty = function (propery) {
  return propery.length;
}

const changeLanguageData = (code) => {
  if (code === 'es') {
    const language = {
      greeting: SpanishGreeting,
      text: SpanishText,
      languages: listLanguagesSpanish

    }
    return language
  }
  const language = {
    greeting: EnglishGreeting,
    text: EnglishText,
    languages: listLanguagesEnglish
  }
  return language
}

const getGreeting = () => {
  return Math.floor(Math.random() * 6)
}

const getGreetingText = (id, greeting) => {
  return greeting[id];
}

export { checkIfInputsAreEmpty, changeLanguageData, getGreeting, getGreetingText }