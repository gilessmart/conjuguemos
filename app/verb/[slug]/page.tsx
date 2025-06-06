import verbList from "@/app/verbList";
import SearchForm from "@/app/SearchForm";
import Conjugations from "./Conjugations";

export function generateStaticParams() {
  return Object.keys(verbList).map(verb => ({ slug: verb }));
}

interface VerbDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const VerbDetailPage = async (props: VerbDetailPageProps) => {
  const params = await props.params;
  const verbDetails = verbList[params.slug];
  const verb = verbDetails.Verb;
  const titleCaseVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
  const irregularConjugations = verbDetails.IrregularConjugations;

  return (
    <div>
      <SearchForm />
      <h1>{titleCaseVerb}</h1>
      <Conjugations verb={verb} irregularConjugations={irregularConjugations} />
    </div>
  );
};

export default VerbDetailPage;
