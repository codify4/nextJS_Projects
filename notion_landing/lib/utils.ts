import { type ClassValue, clsx } from "clsx"
import exp from "constants";
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const recourcesContents = ["Blog", "Notion Academy", "Guides & Tutorials", "Webinars", "Help Center", "API Docs", "Community", "Hire a consultant", "Become a partner"];

export const downloadContents = ["Notion", "Calendar", "Web Clipper"];

export const productContents = {
  icons: [
    "/stars.png", 
    "/docs.png",
    "/book.png",
    "/bullseye.png",
    "/calendar.png"
  ],
  header: ["AI", "Docs", "Wikis", "Projects", "Calendar", "Template Galery", "Custom Stories", "Connections"],
  description: [
    "Integrated AI Assistant",
    "Simple & Powerfull",
    "Centralize your knowladge",
    "For every team or size",
    "Time and work, together",
    "Setups to get you started",
    "See how teams use Notion",
    "Connect your tool to Notion"
  ]
}

export const solutionsContents = {
  titles: [
    "BY TEAM SIZE",
    "BY TEAM FUNCTION",
    "NOTION FOR"
  ],
  icons: [
    "/company.png",
    "/building.png",
    "/house.png"
  ],
  headers: [
    "Enterprise", "Small businesses", "Personal", "Design", "Engineering", "Product", "Managers", "Startups", "Remote Work", "Education", "Nonprofits"
  ],
  descriptions: [
    "Advanced features for your org",
    "Run your team on one tool",
    "Free for individuals"
  ],
}