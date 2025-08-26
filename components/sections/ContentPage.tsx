"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Star, GitFork, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import Divider from "@/components/ui/Divider";
import styles from "@/styles/Home.module.scss";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "oragazz0"; // Replace with your actual GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load repositories. Please try again later.");
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white m-[60px]">
      <div className="flex flex-col gap-6 items-center">
        <span className={[styles.title, "text-center"].join(" ")}>
          <div>
            <span>My</span>
            <span className={styles.redColor}>GitHub</span>
            <span className={styles.grayColor}>Projects</span>
          </div>
        </span>

        <p className={[
          styles.info,
          "text-center",
          "mx-auto px-4",
          "w-full max-w-3xl",
          "my-4 sm:my-6 md:my-8",
          "text-sm sm:text-base md:text-lg",
        ].join(" ")}>
          A collection of my personal projects and experiments. Here you&apos;ll
          find everything from <b>automation</b> and <b>containerization</b> to <b>microservices</b> and <b>backend tinkering</b>.
          <br></br>Basically all the cool stuff I build and break while learning!
        </p>
      </div>

      {error && (
        <div className="p-4 mb-6 bg-red-900/30 border border-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="h-[calc(100vh-450px)] overflow-y-auto p-4 rounded-lg border border-zinc-800">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-lg">
                <Skeleton className="h-7 w-3/4 bg-gray-800 mb-4" />
                <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
                <Skeleton className="h-4 w-2/3 bg-gray-800 mb-4" />
                <div className="flex gap-4">
                  <Skeleton className="h-5 w-16 bg-gray-800" />
                  <Skeleton className="h-5 w-16 bg-gray-800" />
                  <Skeleton className="h-5 w-24 bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{repo.name}</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 border border-white-50">
                      <ExternalLink size={16} />
                      <span className="sr-only">View on GitHub</span>
                    </a>
                  </Button>
                </div>

                <p className="text-gray-400 mb-4 h-[48px] max-h-[48px] overflow-hidden">
                  {repo.description || "No description provided"}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-[#a83232]"></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider />
      <div className={[styles.quote, styles.quoteCenter].join(" ")}>
        &#xFF02;If I am to flower into something other than myself.
        <br />
        I would rather rot into nothingness as I am.&#xFF02; <br />-
        Millicent, Elden Ring
      </div>
    </div>
  );
}
