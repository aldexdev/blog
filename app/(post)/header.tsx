"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import useSWR from "swr";
import type { Post } from "@/app/get-posts";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Header({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments(); // segments can be: date/post or lang/date/post

  const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );

  const { data: post, mutate } = useSWR(
    `/api/view?id=${initialPost?.id ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  if (initialPost == null) return <></>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {post.title}
      </h1>

      <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500">
        <span className="flex-grow">
          <span className="hidden md:inline">
            <span>
              <a
                href="https://twitter.com/aldexdev"
                className="hover:text-gray-800 dark:hover:text-gray-400"
                target="_blank"
              >
                @aldexdev
              </a>
            </span>

            <span className="mx-2">|</span>
          </span>

          {/* since we will pre-render the relative time, over time it
           * will diverge with what the user relative time is, so we suppress the warning.
           * In practice this is not an issue because we revalidate the entire page over time
           * and because we will move this to a server component with template.tsx at some point */}
          <span suppressHydrationWarning={true}>{post.date}</span>
        </span>
      </p>
    </>
  );
}
