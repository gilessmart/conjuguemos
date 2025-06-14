"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getSimplifiedVerbs } from "@/app/verbs";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const verbList = getSimplifiedVerbs();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verb = input.trim().toLowerCase();
    if (verbList.includes(verb)) {
      setError("");
      router.push(`/verb/${verb}`);
    } else {
      setError("Verb not found.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Spanish verb"
        required
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Spanish verb"
      />
      <button type="submit">Lookup</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default SearchForm;
