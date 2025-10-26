import { game_api_endpoints } from "../../config/mainConfig";

export async function addScoresToDB(state) {
  try {
    state.scoresDataHasBeenSended = true;
    const resp = await fetch(
      `${game_api_endpoints.base_url}:${game_api_endpoints.base_port}/${game_api_endpoints.add_scores_endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: state.playerName,
          Level: state.level,
          Scores: state.scores,
        }),
      }
    );
    console.log(await resp.json());
  } catch (ex) {
    console.error(ex.toString());
  }
}
