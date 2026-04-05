import { articles, brands, categories, faqs, products, testimonials } from "@/lib/data/mock";

export const repo = {
  getCategories: async () => categories,
  getCategory: async (slug: string) => categories.find((c) => c.slug === slug),
  getProducts: async () => products,
  getProduct: async (slug: string) => products.find((p) => p.slug === slug),
  getFeaturedProducts: async () => products.slice(0, 8),
  getFeaturedCategories: async () => categories.slice(0, 6),
  getBrands: async () => brands,
  getTestimonials: async () => testimonials,
  getArticles: async () => articles,
  getArticle: async (slug: string) => articles.find((a) => a.slug === slug),
  getFaqs: async () => faqs
};
