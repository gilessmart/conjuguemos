import { getVerbDetails, getSimplifiedVerbs, VerbDetails } from "@/app/verbs";
import SearchForm from "@/app/SearchForm";
import Conjugations from "./Conjugations";

export function generateStaticParams() {
  return getSimplifiedVerbs().map(verb => ({ slug: verb }));
}

interface VerbDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const VerbDetailPage = async (props: VerbDetailPageProps) => {
  const params = await props.params;
  // getVerbDetails should never return undefined in prod
  // because the app will be deployed as a static export
  // so the page won't exist unless the slug is valid
  const verbDetails: VerbDetails = getVerbDetails(params.slug)!;

  return (
    <div>
      <SearchForm />
      <h1>{verbDetails.TitleCaseVerb}</h1>
      <Conjugations verb={verbDetails} />
    </div>
  );
};

export default VerbDetailPage;
