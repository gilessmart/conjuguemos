import { useEffect } from "react";

export function usePageTitle(title: string) {
  const pageTitle = title ? `Conjuguemos - ${title}` : "Conjuguemos";
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
};
