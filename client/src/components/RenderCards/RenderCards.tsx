import Card from "../Card/Card";
import { RenderCardProps } from "./renderCard.types";

const RenderCards = ({ data, title }: RenderCardProps) => {
  if (data.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

export default RenderCards;
