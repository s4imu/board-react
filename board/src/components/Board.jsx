import Line from "./Line";

export default function Board(props) {
  return (
    <div>
      <Line />
      <Line black />
      <Line />
      <Line black />
      <Line />
      <Line black />
      <Line />
      <Line black />
    </div>
  );
}
