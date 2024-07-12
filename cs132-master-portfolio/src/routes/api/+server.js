import { readFileSync } from 'fs';
import { resolve } from 'path';

export function GET() {
	// Resolve and read the projects.json file
	const projectFilePath = resolve('src/lib/server/data/projects.json');
	const projectFileContents = readFileSync(projectFilePath, 'utf-8');
	const projectsData = JSON.parse(projectFileContents);

	// Resolve and read the sdg.json file
	const sdgFilePath = resolve('src/lib/server/data/sdg.json');
	const sdgFileContents = readFileSync(sdgFilePath, 'utf-8');
	const sdgData = JSON.parse(sdgFileContents);

	// Combine both data sets into one JSON response
	return new Response(JSON.stringify({ projects: projectsData, sdg: sdgData }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
