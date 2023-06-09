import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme, defineUserConfig } from "vuepress";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

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
        copyCodePlugin({

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
        danger: 'CAUTION',
        navbar: [
            '/setup/',
            '/reference/',
            '/admin-guide/',
        ],
        sidebar: {
            '/setup/': [
                '/setup/index.md',
                '/setup/01-prerequisites.md',
                '/setup/02-installation.md',
                '/setup/03-configuration.md',
                '/setup/04-aad-setup.md',
                '/setup/05-batch-jobs.md',
            ],
            '/reference/': [
                '/reference/index.md',
                '/reference/envvars.md',
            ]
        }
    })
});
