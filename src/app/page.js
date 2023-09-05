import React from 'react';

import { readFile, writeFile } from '../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
	const data = JSON.parse(readFile(DATABASE_PATH));
	data.hits++;
	writeFile(DATABASE_PATH, JSON.stringify(data));

	return (
		<main>
			<h1>Welcome!</h1>
			<p>You are visitor number {data.hits}.</p>
		</main>
	);
}

export default Home;
