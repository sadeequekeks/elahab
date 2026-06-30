import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogPostBySlug } from "../data/blogPosts";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SafeImage } from "../components/ui/SafeImage";
import { AnimateIn } from "../components/motion/AnimateIn";
import { fadeIn } from "../lib/motion";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PageMeta title={post.title} description={post.excerpt} />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <article>
          <AnimateIn variant={fadeIn} as="section" className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[40vh]">
            <SafeImage
              src={post.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/50" />
            <Container className="relative flex min-h-[220px] flex-col justify-end pb-10 sm:min-h-[280px] lg:min-h-[40vh]">
              <Link
                to="/blog"
                className="text-sm font-medium text-white/80 hover:text-white"
              >
                ← Back to Blog
              </Link>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gold">
                {post.category}
              </p>
              <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {post.title}
              </h1>
              <time className="mt-3 text-sm text-white/70">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Container>
          </AnimateIn>
          <Container className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-600">
              {post.content.map((paragraph, i) => (
                <AnimateIn key={paragraph.slice(0, 40)} delay={i * 0.08}>
                  <p>{paragraph}</p>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </article>
      </div>
    </>
  );
}
