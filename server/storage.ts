import { users, consultations, newsletters, blogPosts, type User, type InsertUser, type Consultation, type InsertConsultation, type Newsletter, type InsertNewsletter, type BlogPost, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
  
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private consultations: Map<number, Consultation>;
  private newsletters: Map<number, Newsletter>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentConsultationId: number;
  private currentNewsletterId: number;
  private currentBlogPostId: number;

  constructor() {
    this.users = new Map();
    this.consultations = new Map();
    this.newsletters = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentConsultationId = 1;
    this.currentNewsletterId = 1;
    this.currentBlogPostId = 1;

    // Initialize with some blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const posts = [
      {
        title: "iOS 17.4 Update: What It Means for Your Meta Ad Performance",
        excerpt: "Apple's latest privacy updates are impacting ad tracking. Here's how to adapt your Meta advertising strategy...",
        content: "Full article content here...",
        category: "Meta Ads",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      },
      {
        title: "5 TikTok Creative Formats That Are Crushing It in 2024",
        excerpt: "From unboxing videos to behind-the-scenes content, discover which creative formats are driving the highest conversions...",
        content: "Full article content here...",
        category: "TikTok Ads",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      },
      {
        title: "The Complete Guide to Reddit Advertising for B2B Companies",
        excerpt: "Reddit's unique community culture requires a different approach. Learn how to advertise authentically while driving results...",
        content: "Full article content here...",
        category: "Reddit Ads",
        imageUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      },
    ];

    posts.forEach(post => {
      const blogPost: BlogPost = {
        ...post,
        id: this.currentBlogPostId++,
        publishedAt: new Date(),
      };
      this.blogPosts.set(blogPost.id, blogPost);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentConsultationId++;
    const consultation: Consultation = { 
      ...insertConsultation, 
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id,
      publishedAt: new Date(),
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
}

export const storage = new MemStorage();
