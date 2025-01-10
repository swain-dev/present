// app/cache-test/page.tsx
import { headers } from 'next/headers';

async function getData() {
	const res = await fetch('https://api.example.com/data', {
		// Caching options
		next: {
			// revalidate: false -> no cache
			// revalidate: 0 -> cache on demand với tags/on-demand revalidation
			// revalidate: số giây -> ISR
			revalidate: 10
		},
		// Hoặc force dynamic
		// cache: 'no-store'
	});
	return res.json();
}

export default async function Page() {
	const data = await getData();
	const headersList = headers();
	
	return (
		<div>
		<h1>Cache Test Page</h1>
		<p>Generated at: {new Date().toISOString()}</p>
		<p>Data: {JSON.stringify(data)}</p>
		</div>
	);
}