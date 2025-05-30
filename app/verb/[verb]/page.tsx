import knownVerbs from "../../knownVerbs";
import VerbForm from "../../SearchForm";
import Conjugations from "./Conjugations";

export function generateStaticParams() {
  return Object.keys(knownVerbs).map(verb => ({ verb }));
}

interface VerbDetailPageProps {
  params: Promise<{
    verb: string;
  }>;
}

const VerbDetailPage = async (props: VerbDetailPageProps) => {
  const params = await props.params;
  const verb = params.verb.toLowerCase();
  const overrides = knownVerbs[verb];

  return (
    <div style={{ padding: 24 }}>
      <VerbForm />
      <Conjugations verb={verb} overrides={overrides} />
    </div>
  );
};

export default VerbDetailPage;
