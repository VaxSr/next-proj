import { BlogPostCard } from "@/components/general/BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/utils/db";
import { Suspense } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>

      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}

function BlogPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden"
          key={idx}
        >
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="p-4 flex-1 flex flex-col gap-3">
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full"></Skeleton>
              <Skeleton className="h-4 w-full"></Skeleton>
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="h-8 w-8 rounded-full mr-2"></Skeleton>
                <Skeleton className="h-4 w-24"></Skeleton>
              </div>
              <Skeleton className="h-4 w-16"></Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
