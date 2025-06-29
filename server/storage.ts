import { users, consultations, newsletters, blogPosts, type User, type InsertUser, type Consultation, type InsertConsultation, type Newsletter, type InsertNewsletter, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const [consultation] = await db
      .insert(consultations)
      .values({
        ...insertConsultation,
        company: insertConsultation.company || null,
        currentSpend: insertConsultation.currentSpend || null,
        platforms: insertConsultation.platforms || null,
        goals: insertConsultation.goals || null,
      })
      .returning();
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return await db.select().from(consultations);
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const [newsletter] = await db
      .insert(newsletters)
      .values({
        ...insertNewsletter,
        interests: insertNewsletter.interests || null,
      })
      .returning();
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db
      .insert(blogPosts)
      .values({
        ...insertBlogPost,
        imageUrl: insertBlogPost.imageUrl || null,
      })
      .returning();
    return blogPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    const posts = await db.select().from(blogPosts);
    return posts.sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [blogPost] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return blogPost || undefined;
  }

  async initializeData(): Promise<void> {
    // Check if blog posts already exist
    const existingPosts = await this.getBlogPosts();
    if (existingPosts.length > 0) {
      return; // Data already initialized
    }

    // Insert initial blog posts
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

    for (const post of posts) {
      await this.createBlogPost(post);
    }
  }
}

export const storage = new DatabaseStorage();
