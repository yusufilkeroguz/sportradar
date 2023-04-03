import { FormEvent } from "react";
import { useStoreon } from "storeon/react";

import { IStoreEvents, IStoreState } from "@/store/interface";
import Button from "../../atoms/Button";

export default function AddMatch() {
  const { dispatch } = useStoreon<IStoreState, IStoreEvents>("matches");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const homeName = formProps.homeName.toString().trim();
    const awayName = formProps.awayName.toString().trim();

    dispatch("matches/add/game", {
      home: { score: 0, name: homeName },
      away: { score: 0, name: awayName },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-2xl font-bold">Home</h3>

      <div className="flex flex-col">
        <input
          type="text"
          className="form-input"
          name="homeName"
          placeholder="Home Name"
        />
      </div>

      <h3 className="text-2xl font-bold">Away</h3>

      <div className="flex flex-col mb-4">
        <input
          type="text"
          className="form-input"
          name="awayName"
          placeholder="Away Name"
        />
      </div>

      <Button type="submit" label="Add Match" />
    </form>
  );
}
