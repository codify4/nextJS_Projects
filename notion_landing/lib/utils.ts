import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const recourcesContents = ["Blog", "Notion Academy", "Guides & Tutorials", "Webinars", "Help Center", "API Docs", "Community", "Hire a consultant", "Become a partner"];

export const downloadContents = ["Notion", "Calendar", "Web Clipper"];

export const productContents = {
  icons: [
    "../public/starts.png", 
    "../public/docs.png",
    "../public/book.png",
    "../public/bullseye.png",
    "../public/calendar.png"
  ],
  header: [
    ""
  ],
  desciption: ""
}