export function Timer({ time }: Props) {
  return <div className="characters-Timer">{time}</div>;
}

interface Props {
  time: number;
}
