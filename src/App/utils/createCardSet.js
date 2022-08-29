import blueCardsData from "../../data/mythicCards/blue";
import brownCardsData from "../../data/mythicCards/brown";
import greenCardsData from "../../data/mythicCards/green";
import { shuffleArray } from "./shuffleArray";

export const createCardSet = (state) => {
  const blueCards = blueCardsData;
  const brownCards = brownCardsData;
  const greenCards = greenCardsData;
  
  const getAncientCountCards = (colorCard) => {
    return state.Ancinent.firstStage[colorCard] + state.Ancinent.secondStage[colorCard] + state.Ancinent.thirdStage[colorCard]
  }

  const getNormalSet = (colorCardData) => {
    const countSetCards = getAncientCountCards(`${colorCardData[0].color}Cards`);
    const shuffledCardSet = shuffleArray(colorCardData);
    return shuffledCardSet.slice(0, countSetCards);
  }

  const getVeryEasySet = (colorCardData) => {
    const countSetCards = getAncientCountCards(`${colorCardData[0].color}Cards`);
    const easyCardSet = [...colorCardData.filter(el => el.difficulty === 'easy'), ...colorCardData.filter(el => el.difficulty === 'normal')]
    easyCardSet.slice(0, countSetCards);
    return shuffleArray(easyCardSet)
  }

  const getEasySet = (colorCardData) => {
    const countSetCards = getAncientCountCards(`${colorCardData[0].color}Cards`);
    const withoutHardCardSet = colorCardData.filter(el => el.difficulty !== 'hard');
    const shuffledCardSet = shuffleArray(withoutHardCardSet)
    shuffledCardSet.slice(0, countSetCards);
    return shuffledCardSet;
  }

  const getHardSet = (colorCardData) => {
    const countSetCards = getAncientCountCards(`${colorCardData[0].color}Cards`);
    const withoutEasyCardSet = colorCardData.filter(el => el.difficulty !== 'easy');
    const shuffledCardSet = shuffleArray(withoutEasyCardSet)
    shuffledCardSet.slice(0, countSetCards);
    return shuffledCardSet;
  }

  const getVeryHardSet = (colorCardData) => {
    const countSetCards = getAncientCountCards(`${colorCardData[0].color}Cards`);
    const hardCardSet = [...colorCardData.filter(el => el.difficulty === 'hard'), ...colorCardData.filter(el => el.difficulty === 'normal')]
    hardCardSet.slice(0, countSetCards);
    return shuffleArray(hardCardSet)
  }

  const filterDifficulty = {
    veryEasy: getVeryEasySet,
    easy: getEasySet,
    normal: getNormalSet,
    hard: getHardSet,
    veryHard: getVeryHardSet
  }

  const cards = {
    blueCards: filterDifficulty[state.GameDifficulty](blueCards),
    brownCards: filterDifficulty[state.GameDifficulty](brownCards),
    greenCards: filterDifficulty[state.GameDifficulty](greenCards)
  }
  const cardsSet = { 'firstStage': [], 'secondStage': [], 'thirdStage': [] };
  Object.keys(cardsSet).forEach(stage => {
    
    cardsSet[stage] = shuffleArray([
      ...cards.blueCards.splice(0, state.Ancinent[stage].blueCards),
      ...cards.brownCards.splice(0, state.Ancinent[stage].brownCards),
      ...cards.greenCards.splice(0, state.Ancinent[stage].greenCards)
    ])
  })

  return cardsSet;
}