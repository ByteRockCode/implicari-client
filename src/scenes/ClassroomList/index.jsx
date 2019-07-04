import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


const query = gql`
  {
    classrooms {
      id
      name
      isArchived
    }
  }
`


const ClassroomList = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error! ${error}`;

      return data.classrooms.map(({ id, name }) => (
        <div key={id}>
          <p>{id}: {name}</p>
        </div>
      ));
    }}
  </Query>
)


export default ClassroomList;
