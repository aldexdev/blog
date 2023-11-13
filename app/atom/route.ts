import { getPosts } from "@/app/get-posts";

export async function GET() {
  const posts = await getPosts();
  const max = 100; // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Alex Delgado</title>
    <subtitle>Blog</subtitle>
    <link href="https://aldexdev.com/atom" rel="self"/>
    <link href="https://aldexdev.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://aldexdev.com/</id>
    <author>
      <name>Alex Delgado</name>
      <email>aldexdev@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/);
      if (!dateMatch) return "";
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://aldexdev.com/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
