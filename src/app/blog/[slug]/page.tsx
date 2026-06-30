import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-3xl mx-auto px-4 sm:px-6 pb-10">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3 ${post.catColor}`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-8">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {block.heading}
                </h2>
              )}
              <p className="text-foreground/70 leading-relaxed text-[17px]">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-14 border-foreground/10" />

        {/* Related posts */}
        {related.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              More from Our Garden
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl overflow-hidden border border-foreground/5 hover:shadow-lg transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${r.catColor}`}
                    >
                      {r.category}
                    </span>
                    <h4 className="font-bold text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
