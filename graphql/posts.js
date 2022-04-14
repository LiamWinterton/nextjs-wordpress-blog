import { gql } from '@apollo/client'
import client from '../apollo-client'

export const getRecentPosts = async () => {
	const { data } = await client.query({
		query: gql`
			query RecentPosts {
				posts(
					first: 10
					where: { orderby: { field: DATE, order: DESC } }
				) {
					edges {
						node {
							title
							excerpt
							slug
							date
							featuredImage {
								node {
									sourceUrl
								}
							}
						}
					}
				}
			}
		`
	})

	return data.posts.edges
}
