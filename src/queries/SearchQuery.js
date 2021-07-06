module.exports = `query SearchQuery($query: String!, $first: Int!, $after: ID) {
  questionSearch(query: $query, first: $first, after: $after) {
    count
    edges {
      node {
        id
        author {
          id
          isDeleted
          nick
          avatar {
            thumbnailUrl
          }
          rank {
            name
          }
        }
        content
        answers {
          nodes {
            thanksCount
            ratesCount
            rating
            content
            author {
              id
              isDeleted
              nick
              avatar {
                thumbnailUrl
              }
              rank {
                name
              }
            }
          }
          hasVerified
        }
      }
      highlight {
        contentFragments
      }
    }
  }
}
`