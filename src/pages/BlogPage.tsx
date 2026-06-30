import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SafeImage } from "../components/ui/SafeImage";
import { StaggerGrid } from "../components/motion/StaggerGrid";

export function BlogPage() {
  return (
    <>
      <PageMeta
        title="Blog"
        description="Market updates, investment tips, and Egypt real estate trends from El Albab."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <SectionHeading
            title="News & Insights"
            subtitle="Stay informed on Egypt's property market with expert analysis from our team."
          />
          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <SafeImage
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-bold text-ink transition group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{post.excerpt}</p>
                  <time className="mt-3 block text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </article>
            ))}
          </StaggerGrid>
        </Container>
      </div>
    </>
  );
}
