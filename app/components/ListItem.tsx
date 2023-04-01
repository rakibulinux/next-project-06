import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, date, title } = post;
  console.log(id, date, title);
  const formatedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link
        className="underline hover:text-black/70 text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formatedDate}</p>
    </li>
  );
}
