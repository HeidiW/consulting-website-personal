import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const formatDate = (date: Date | string) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'meta ads':
        return 'text-blue-600';
      case 'tiktok ads':
        return 'text-pink-600';
      case 'reddit ads':
        return 'text-orange-600';
      default:
        return 'text-primary';
    }
  };

  if (isLoading) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Latest Insights & Strategies
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay ahead of the curve with actionable insights on performance advertising and digital marketing trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-neutral-50 overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Latest Insights & Strategies
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay ahead of the curve with actionable insights on performance advertising and digital marketing trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <Card key={post.id} className="bg-neutral-50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                  <span>{formatDate(post.publishedAt!)}</span>
                  <span>•</span>
                  <span className={getCategoryColor(post.category)}>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-primary font-medium hover:text-secondary transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
