import { defineConfig } from 'tinacms';
import { blog_postFields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master';

export default defineConfig({
	branch,
	clientId: '8da456d5-0898-4826-9bd0-f44b3b823a0f', // Get this from tina.io
	token: '3b95d7f5798fcf335c0ca87fbe97bb01fba5eca4', // Get this from tina.io
	client: { skip: true },
	build: {
		outputFolder: 'admin',
		publicFolder: 'static',
		basePath: 'blog',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static/blog',
		},
	},
	schema: {
		collections: [
			{
				format: 'md',
				label: 'Posts',
				name: 'posts',
				path: 'content',
				frontmatterFormat: 'yaml',
				match: {
					include: '**/*',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
					...blog_postFields(),
				],
			},
		],
	},
});
