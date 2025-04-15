"use client";

import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ClipboardList, RouteOff, Users, Heart, ExternalLink, Map } from "lucide-react";

interface MenuLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const mainNavLinks: MenuLink[] = [
  { 
    href: "/", 
    label: "End To End New Hampshire",
    icon: <ExternalLink size={16} />
  },
  { 
    href: "#Mission", 
    label: "The Mission",
    icon: <ClipboardList size={16} />
  },
  { 
    href: "#Route", 
    label: "The Route",
    icon: <Map size={16} />
  },
  { 
    href: "#Crew", 
    label: "Our Crew",
    icon: <Users size={16} />
  },
];

export default function Header() {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      {/* Better responsive handling to prevent overflow */}
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 lg:gap-4">
        <nav className="flex items-center gap-2 lg:gap-4 overflow-visible w-full sm:w-auto justify-center sm:justify-start">
          {mainNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md text-white",
                "bg-[rgba(34,139,34,0.6)] hover:bg-[rgba(34,139,34,0.8)]",
                "backdrop-blur-sm whitespace-nowrap flex-shrink-0",
                // Hide mission, route, crew buttons on small and medium screens
                index > 0 && index < 4 ? "hidden lg:flex" : "flex"
              )}
            >
              {link.icon && link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 lg:gap-4 overflow-visible w-full sm:w-auto justify-center sm:justify-end">
          <div className="relative">
            <button
              onClick={() => setShowDonate(!showDonate)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md text-white bg-[rgba(34,139,34,1)] hover:bg-[rgba(20,82,20,1)] backdrop-blur-sm whitespace-nowrap flex-shrink-0"
            >
              <Heart size={16} />
              Donate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("transition-transform duration-200", showDonate ? "rotate-180" : "")}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {showDonate && (
              <div className="absolute right-0 mt-2 w-40 bg-background border border-white/10 rounded-md shadow-lg p-2 z-50">
                <button
                  
                  className="block w-full text-left px-4 py-2 text-sm hover:text-main hover:bg-white/5 rounded-md"
                  
                  
                  onClick={() => setShowDonate(false)} // Close dropdown on click
                >
                  United Kingdom
                </button>
                <button
                  
                  className="block w-full text-left px-4 py-2 text-sm hover:text-main hover:bg-white/5 rounded-md"
                  
                  
                  onClick={() => setShowDonate(false)} // Close dropdown on click
                >
                  USA
                </button>
                <button
                  
                  className="block w-full text-left px-4 py-2 text-sm hover:text-main hover:bg-white/5 rounded-md"
                  
                  
                  onClick={() => setShowDonate(false)} // Close dropdown on click
                >
                  Australia
                </button>
              </div>
            )}
          </div>
          <Link
            href=""
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md text-white bg-[rgba(34,139,34,1)] hover:bg-[rgba(20,82,20,1)] backdrop-blur-sm whitespace-nowrap flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Track Run
          </Link>
        </div>
      </div>
    </header>
  );
}
