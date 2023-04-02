import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ postId: post.id }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  console.log(posts);
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);
  console.log(title, date, contentHtml);
  return (
    <main className="text-white px-6 prose prose-xl prose-slate prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section
          className="text-white"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
