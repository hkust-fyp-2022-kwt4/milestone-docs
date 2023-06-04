import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
    lang: "en-US",
    title: "Milestone admin docs",
    description: "Admin documentation for Milestone: Gamified learning system for university",
    host: 'localhost',
    base: '/milestone-docs/',
    plugins: [
        searchPlugin({
            // options
        }),
    ],
    markdown: {
        code: {
            lineNumbers: 5, // Only show line numbers for code blocks with >=5 lines
        },
    },
    theme: defaultTheme({
        repo: 'https://github.com/hkust-fyp-2022-kwt4/milestone',
        docsRepo: 'https://github.com/hkust-fyp-2022-kwt4/milestone-docs',
        docsDir: 'docs',
        navbar: [
            '/setup/',
            '/reference/',
            '/admin-guide/',
        ],
        sidebar: {
            '/setup/': [
                '/setup/index.md',
                '/setup/01-prerequisites.md',
            ],
        }
    })
});
