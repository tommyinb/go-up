import { Stage } from "../menus/stage";

export function getSubmitScore(stage: Stage) {
  const prize = stage.score.prize / stage.config.prize;

  const level = stage.score.level / stage.config.level;

  const coin = stage.score.coin / stage.config.coin;

  const time =
    stage.score.time !== undefined
      ? 1 - stage.score.time / (stage.config.round * stage.config.time)
      : 0;

  return (
    Math.round(1000 * prize) * 1_000_000_000 +
    Math.round(1000 * level) * 1_000_000 +
    Math.round(1000 * coin) * 1_000 +
    Math.round(1000 * time) * 1
  );
}
