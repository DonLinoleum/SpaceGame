export function addScores(state)
{
    state.scores++
    state.scoresDOMelement.innerText = "Scores: " + state.scores
}