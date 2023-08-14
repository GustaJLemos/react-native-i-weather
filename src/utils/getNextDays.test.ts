import { getNextDays } from './getNextDays';

// podemos agrupar testes com o describe 
describe("getNextDays", () => {
  // it ou test a gente consegue usar os dois pra testar
  it("should be return the next five days", () => {
    // aq vamos executar os nossos testes...
    const days = getNextDays();

    // quero que tenha 5 dias
    expect(days.length).toBe(5);
  })
})
