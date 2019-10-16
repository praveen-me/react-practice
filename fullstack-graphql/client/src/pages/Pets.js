import React, { useState } from "react";
import gql from "graphql-tag";
import PetBox from "../components/PetBox";
import NewPet from "../components/NewPet";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Loader from "../components/Loader";

const query = gql`
  query GetPets {
    pets {
      name
      id
      user {
        username
      }
    }
  }
`;

const createPet = gql`
  mutation CreatePet($input: AddPetInput!) {
    addPet(input: $input) {
      name
      id
      user {
        username
      }
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, error, loading } = useQuery(query);
  const [addNewPet, { d, e, l }] = useMutation(createPet, {
    update(
      cache,
      {
        data: { addPet }
      }
    ) {
      const { pets } = cache.readQuery({ query });

      cache.writeQuery({
        query,
        data: { pets: [...pets, addPet] }
      });
    }
  });

  if (loading) return <Loader />;

  const onSubmit = input => {
    setModal(false);

    addNewPet({
      variables: {
        input
      }
    });
  };

  const petsList = data.pets.map(pet => (
    <div className="col-xs-12 col-md-4 col" key={pet.id}>
      <div className="box">
        <PetBox pet={pet} />
      </div>
    </div>
  ));

  if (modal) {
    return (
      <div className="row center-xs">
        <div className="col-xs-8">
          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">{petsList}</div>
      </section>
    </div>
  );
}
