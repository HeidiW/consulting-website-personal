# AdsExpert - Performance Advertising Consultant Website

## Overview

This is a modern full-stack web application for a performance advertising consultant specializing in Meta, TikTok, and Reddit ads. The application serves as a professional landing page and consultation booking platform, built with React, Express, and PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Production Build**: ESBuild for server bundling, Vite for client assets
- **Type Checking**: TypeScript with strict mode enabled
- **Development Tools**: Replit-specific plugins for enhanced development experience

## Key Components

### Database Schema
- `users`: User authentication and management
- `consultations`: Consultation booking requests with client details
- `newsletters`: Newsletter subscription management
- `blog_posts`: Content management for marketing insights

### API Endpoints
- `POST /api/consultations`: Book consultation appointments
- `POST /api/newsletters`: Newsletter subscription signup
- `GET /api/blog-posts`: Retrieve published blog content

### Client-Side Features
- **Landing Page**: Hero section, services overview, testimonials
- **Consultation Booking**: Multi-step form with calendar integration
- **Newsletter Signup**: Interest-based subscription system
- **Blog Section**: Marketing insights and strategy content
- **About Section**: Professional timeline and expertise showcase

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Request Validation**: Zod schemas validate incoming data
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **Client Updates**: React Query manages cache updates and UI state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation integration

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- Runs on `tsx server/index.ts` for hot-reloading development
- Vite middleware serves client assets with HMR
- Database migrations handled via `drizzle-kit push`

### Production Build
- Client assets built with Vite to `dist/public`
- Server bundled with ESBuild to `dist/index.js`
- Static file serving for production deployment
- Environment variables required: `DATABASE_URL`

### Database Management
- Schema definitions in `shared/schema.ts`
- Migrations output to `./migrations` directory
- PostgreSQL dialect with Drizzle Kit configuration

## Changelog

- June 29, 2025. Initial setup with in-memory storage
- June 29, 2025. Added PostgreSQL database integration with Drizzle ORM
- June 29, 2025. Updated About page with authentic professional experience from TikTok, Reddit, and enterprise roles
- June 29, 2025. Updated contact information to heidi67west@gmail.com and Signal: heidiwilliamsfoy.67
- June 29, 2025. Hidden testimonials section temporarily until real client testimonials available
- June 29, 2025. Removed photo from About page per user request

## User Preferences

Preferred communication style: Simple, everyday language.
Name display: "Williams-Foy" with hyphen throughout site
Contact: heidi67west@gmail.com, Signal: heidiwilliamsfoy.67, Brooklyn NY
Color scheme: Cal-poly-green palette mixed with warm peach/coral tones
Professional focus: Technical solutions consulting for TikTok, Reddit, Meta advertising