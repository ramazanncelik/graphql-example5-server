const typeDefs = `

  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]
    participants: [Participant!]
  }
  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    user_id: ID!
    user: User!
    location_id: ID!
    location: Location!
    participants: [Participant!]!
  }
  type Location{
    id: ID!
    name: String!
    desc: String!
    lat: Float,
    lng: Float!
  }
  type Participant{
    id: ID!,
    user_id: ID!,
    event_id: ID!
    user: User!
    event: Event!
  }

  # User
  input CreateUser {
    username: String,
    email: String
  }
  input UpdateUser {
    id: ID,
    username: String
  }
  input DeleteUser {
    id: ID
  }

  # Event
  input CreatedEventInput {
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
  }
  
  input UpdatedEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }
  input DeleteEvent {
    id: ID
  }

  # Location
  input CreateLocation {
    name: String,
    desc: String,
    lat: Float,
    lng: Float
  }
  input UpdateLocation {
    id: ID,
    name: String,
    desc: String
  }
  input DeleteLocation {
    id: ID
  }

  # Participant
  input CreateParticipant {
    user_id: ID,
    event_id: ID
  }
  input UpdateParticipant {
    id: ID,
    user_id: ID,
    event_id: ID
  }
  input DeleteParticipant {
    id: ID
  }

  type Query {
    users: [User!]!
    events: [Event!]!
    event(id: ID!): Event!
    locations: [Location!]!
    participants: [Participant!]!
  }

  type Mutation {
    # User #
    addUser(data: CreateUser): User!
    updateUser(data: UpdateUser): User!
    deleteUser(data: DeleteUser): User!
    deleteAllUser: Boolean!
    
    # Event #
    createdEvent(data: CreatedEventInput!): Event!
    updatedEvent(id: ID!, data: UpdatedEventInput!): Event!
    deletedEvent(id: ID!): Event!
    deletedAllEvent: Boolean!

    # Location #
    addLocation(data: CreateLocation): Location!
    updateLocation(data: UpdateLocation): Location!
    deleteLocation(data: DeleteLocation): Location!
    deleteAllLocation: Boolean!
    
    # Participant #
    addParticipant(data: CreateParticipant): Participant!
    updateParticipant(data: UpdateParticipant): Participant!
    deleteParticipant(data: DeleteParticipant): Participant!
    deleteAllParticipant: Boolean!
  }

  type Subscription {
    eventCreated: Event!
    participantCreated(event_id: ID): Participant!
  }
`;

export default typeDefs;