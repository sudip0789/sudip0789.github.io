#!/usr/bin/env node

/**
 * GitHub Projects Fetcher
 * 
 * This script fetches public repositories from GitHub and saves them to public/projects.json
 * 
 * Usage:
 *   GH_USERNAME=yourusername node scripts/fetch-projects.mjs
 * 
 * Environment Variables:
 *   GH_USERNAME       - Your GitHub username (required)
 *   GH_TOKEN          - GitHub personal access token (optional, increases rate limit)
 *   EXCLUDE_REPOS     - Comma-separated list of repos to exclude (optional)
 *   MAX_PROJECTS      - Maximum number of projects to fetch (default: 6)
 *   SORT_BY           - Sort by 'stars' or 'updated' (default: 'stars')
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GH_USERNAME = process.env.GH_USERNAME;
const GH_TOKEN = process.env.GH_TOKEN || '';
const EXCLUDE_REPOS = (process.env.EXCLUDE_REPOS || '').split(',').filter(Boolean);
const MAX_PROJECTS = parseInt(process.env.MAX_PROJECTS || '6', 10);
const SORT_BY = process.env.SORT_BY || 'stars';

if (!GH_USERNAME) {
  console.error('Error: GH_USERNAME environment variable is required');
  process.exit(1);
}

const fetchRepos = () => {
  return new Promise((resolve, reject) => {
    const sortParam = SORT_BY === 'stars' ? 'stargazers' : 'updated';
    const options = {
      hostname: 'api.github.com',
      path: `/users/${GH_USERNAME}/repos?sort=${sortParam}&per_page=100`,
      headers: {
        'User-Agent': 'Node.js GitHub Projects Fetcher',
        ...(GH_TOKEN && { 'Authorization': `token ${GH_TOKEN}` })
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`GitHub API returned status ${res.statusCode}: ${data}`));
          return;
        }
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  try {
    console.log(`Fetching repositories for ${GH_USERNAME}...`);
    
    const repos = await fetchRepos();
    
    const filtered = repos
      .filter(repo => 
        !repo.fork && 
        !repo.archived && 
        !repo.private &&
        !EXCLUDE_REPOS.includes(repo.name)
      )
      // 🧠 Sort manually by stars or updated date
      .sort((a, b) => {
        if (SORT_BY === 'stars') {
          return b.stargazers_count - a.stargazers_count;
        } else if (SORT_BY === 'updated') {
          return new Date(b.updated_at) - new Date(a.updated_at);
        }
        return 0;
      })
      .slice(0, MAX_PROJECTS)
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at
      }));

    const outputPath = path.join(__dirname, '..', 'public', 'projects.json');
    fs.writeFileSync(outputPath, JSON.stringify(filtered, null, 2));
    
    console.log(`✓ Successfully fetched ${filtered.length} projects`);
    console.log(`✓ Saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    process.exit(1);
  }
};

main();
