import React from "react";

export interface ConjugationsProps {
  verb: string;
  overrides: object;
}

const Conjugations: React.FC<ConjugationsProps> = ({ verb, overrides }) => {
  // For now, just display a placeholder since knownVerbs only has empty objects
  return (
    <div>
      <h2>{verb}</h2>
      <pre>{JSON.stringify(overrides, null, 2)}</pre>
    </div>
  );
};

export default Conjugations;