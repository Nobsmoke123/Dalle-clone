export interface RenderCardProps {
  data: Array<Post>;
  title: string;
}

export interface Post {
  _id: string;
  image: string;
}
