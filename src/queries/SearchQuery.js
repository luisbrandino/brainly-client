module.exports = `query SearchQuery($query: String!, $first: Int!, $after: ID) {
  questionSearch(query: $query, first: $first, after: $after) {
    edges {
      node {
        id
        author {
          id
          isDeleted
          nick
          points
          created
          bestAnswersCount
          avatar {
            thumbnailUrl
          }
          rank {
            name
            description
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
              points
              created
              bestAnswersCount
              avatar {
                thumbnailUrl
              }
              rank {
                name
                description
              }
            }
          }
          hasVerified
        }
      }
    }
  }
}`