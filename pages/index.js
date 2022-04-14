import { getRecentPosts } from '../graphql/posts'

export default function Home(props) {
	return (
		<div>
			<h1>Homepage</h1>
			<ul>
				{props.recentPosts.map(post => {
					return <li key={post.node.slug}>{post.node.title}</li>
				})}
			</ul>
		</div>
	)
}

export async function getStaticProps() {
	const recentPosts = await getRecentPosts()

	return {
		props: {
			recentPosts
		}
	}
}
