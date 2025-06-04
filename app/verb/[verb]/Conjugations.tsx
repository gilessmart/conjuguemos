import { VerbConjugations } from "@/app/types";
import React from "react";

export interface ConjugationsProps {
  verb: string;
  irregularConjugations: VerbConjugations;
}

const Conjugations: React.FC<ConjugationsProps> = ({ verb, irregularConjugations }) => {
  const conjugations = generateConjugations(verb, irregularConjugations);
  return (
    <div>
      <h2>Conjugations</h2>
      <h3>Indicative</h3>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Present</th>
            <th>Preterite</th>
            <th>Imperfect</th>
            <th>Future</th>
            <th>Conditional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yo</td>
            <td>{conjugations.Indicative?.Present?.FirstPersonSingular}</td>
            <td>{conjugations.Indicative?.Preterite?.FirstPersonSingular}</td>
            <td>{conjugations.Indicative?.Imperfect?.FirstPersonSingular}</td>
            <td>{conjugations.Indicative?.Future?.FirstPersonSingular}</td>
            <td>{conjugations.Indicative?.Conditional?.FirstPersonSingular}</td>
          </tr>
          <tr>
            <td>Tú</td>
            <td>{conjugations.Indicative?.Present?.SecondPersonSingular}</td>
            <td>{conjugations.Indicative?.Preterite?.SecondPersonSingular}</td>
            <td>{conjugations.Indicative?.Imperfect?.SecondPersonSingular}</td>
            <td>{conjugations.Indicative?.Future?.SecondPersonSingular}</td>
            <td>{conjugations.Indicative?.Conditional?.SecondPersonSingular}</td>
          </tr>
          <tr>
            <td>Él/Ella/Usted</td>
            <td>{conjugations.Indicative?.Present?.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative?.Preterite?.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative?.Imperfect?.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative?.Future?.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative?.Conditional?.ThirdPersonSingular}</td>
          </tr>
          <tr>
            <td>Nosotros/Nosotras</td>
            <td>{conjugations.Indicative?.Present?.FirstPersonPlural}</td>
            <td>{conjugations.Indicative?.Preterite?.FirstPersonPlural}</td>
            <td>{conjugations.Indicative?.Imperfect?.FirstPersonPlural}</td>
            <td>{conjugations.Indicative?.Future?.FirstPersonPlural}</td>
            <td>{conjugations.Indicative?.Conditional?.FirstPersonPlural}</td>
          </tr>
          <tr>
            <td>Vosotros/Vosotras</td>
            <td>{conjugations.Indicative?.Present?.SecondPersonPlural}</td>
            <td>{conjugations.Indicative?.Preterite?.SecondPersonPlural}</td>
            <td>{conjugations.Indicative?.Imperfect?.SecondPersonPlural}</td>
            <td>{conjugations.Indicative?.Future?.SecondPersonPlural}</td>
            <td>{conjugations.Indicative?.Conditional?.SecondPersonPlural}</td>
          </tr>
          <tr>
            <td>Ellos/Ellas/Ustedes</td>
            <td>{conjugations.Indicative?.Present?.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative?.Preterite?.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative?.Imperfect?.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative?.Future?.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative?.Conditional?.ThirdPersonPlural}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Conjugations;

function generateConjugations(verb: string, irregularConjugations: VerbConjugations) {
  const ending = verb.slice(-2);
  const stem = verb.slice(0, -2);
  switch (ending) {
    case "ar":
      return generateArConjugations(stem, irregularConjugations);
    case "er":
      return generateErConjugations(stem, irregularConjugations);
    case "ir":
      return generateIrConjugations(stem, irregularConjugations);
    default:
      throw new Error(`Unsupported verb ending: ${ending}`);
  }
}

function generateArConjugations(stem: string, irregularConjugations: VerbConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations.Indicative?.Present?.SecondPersonSingular || `${stem}as`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Present?.ThirdPersonSingular || `${stem}a`,
        FirstPersonPlural: irregularConjugations.Indicative?.Present?.FirstPersonPlural || `${stem}amos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Present?.SecondPersonPlural || `${stem}áis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Present?.ThirdPersonPlural || `${stem}an`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations.Indicative?.Preterite?.FirstPersonSingular || `${stem}é`,
        SecondPersonSingular: irregularConjugations.Indicative?.Preterite?.SecondPersonSingular || `${stem}aste`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ó`,
        FirstPersonPlural: irregularConjugations.Indicative?.Preterite?.FirstPersonPlural || `${stem}amos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Preterite?.SecondPersonPlural || `${stem}asteis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Preterite?.ThirdPersonPlural || `${stem}aron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations.Indicative?.Imperfect?.FirstPersonSingular || `${stem}aba`,
        SecondPersonSingular: irregularConjugations.Indicative?.Imperfect?.SecondPersonSingular || `${stem}abas`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}aba`,
        FirstPersonPlural: irregularConjugations.Indicative?.Imperfect?.FirstPersonPlural || `${stem}ábamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Imperfect?.SecondPersonPlural || `${stem}abais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}aban`
      },
      Future: {
        FirstPersonSingular: irregularConjugations.Indicative?.Future?.FirstPersonSingular || `${stem}aré`,
        SecondPersonSingular: irregularConjugations.Indicative?.Future?.SecondPersonSingular || `${stem}arás`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Future?.ThirdPersonSingular || `${stem}ará`,
        FirstPersonPlural: irregularConjugations.Indicative?.Future?.FirstPersonPlural || `${stem}aremos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Future?.SecondPersonPlural || `${stem}aréis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Future?.ThirdPersonPlural || `${stem}arán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations.Indicative?.Conditional?.FirstPersonSingular || `${stem}aría`,
        SecondPersonSingular: irregularConjugations.Indicative?.Conditional?.SecondPersonSingular || `${stem}arías`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Conditional?.ThirdPersonSingular || `${stem}aría`,
        FirstPersonPlural: irregularConjugations.Indicative?.Conditional?.FirstPersonPlural || `${stem}aríamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Conditional?.SecondPersonPlural || `${stem}aríais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Conditional?.ThirdPersonPlural || `${stem}arían`
      }
    }
  };
}

function generateErConjugations(stem: string, irregularConjugations: VerbConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations.Indicative?.Present?.SecondPersonSingular || `${stem}es`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Present?.ThirdPersonSingular || `${stem}e`,
        FirstPersonPlural: irregularConjugations.Indicative?.Present?.FirstPersonPlural || `${stem}emos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Present?.SecondPersonPlural || `${stem}éis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Present?.ThirdPersonPlural || `${stem}en`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations.Indicative?.Preterite?.FirstPersonSingular || `${stem}í`,
        SecondPersonSingular: irregularConjugations.Indicative?.Preterite?.SecondPersonSingular || `${stem}iste`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ió`,
        FirstPersonPlural: irregularConjugations.Indicative?.Preterite?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Preterite?.SecondPersonPlural || `${stem}isteis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Preterite?.ThirdPersonPlural || `${stem}ieron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations.Indicative?.Imperfect?.FirstPersonSingular || `${stem}ía`,
        SecondPersonSingular: irregularConjugations.Indicative?.Imperfect?.SecondPersonSingular || `${stem}ías`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}ía`,
        FirstPersonPlural: irregularConjugations.Indicative?.Imperfect?.FirstPersonPlural || `${stem}íamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Imperfect?.SecondPersonPlural || `${stem}íais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}ían`
      },
      Future: {
        FirstPersonSingular: irregularConjugations.Indicative?.Future?.FirstPersonSingular || `${stem}eré`,
        SecondPersonSingular: irregularConjugations.Indicative?.Future?.SecondPersonSingular || `${stem}erás`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Future?.ThirdPersonSingular || `${stem}erá`,
        FirstPersonPlural: irregularConjugations.Indicative?.Future?.FirstPersonPlural || `${stem}eremos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Future?.SecondPersonPlural || `${stem}eréis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Future?.ThirdPersonPlural || `${stem}erán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations.Indicative?.Conditional?.FirstPersonSingular || `${stem}ería`,
        SecondPersonSingular: irregularConjugations.Indicative?.Conditional?.SecondPersonSingular || `${stem}erías`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Conditional?.ThirdPersonSingular || `${stem}ería`,
        FirstPersonPlural: irregularConjugations.Indicative?.Conditional?.FirstPersonPlural || `${stem}eríamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Conditional?.SecondPersonPlural || `${stem}eríais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Conditional?.ThirdPersonPlural || `${stem}erían`
      }
    }
  };
}

function generateIrConjugations(stem: string, irregularConjugations: VerbConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations.Indicative?.Present?.SecondPersonSingular || `${stem}es`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Present?.ThirdPersonSingular || `${stem}e`,
        FirstPersonPlural: irregularConjugations.Indicative?.Present?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Present?.SecondPersonPlural || `${stem}ís`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Present?.ThirdPersonPlural || `${stem}en`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations.Indicative?.Preterite?.FirstPersonSingular || `${stem}í`,
        SecondPersonSingular: irregularConjugations.Indicative?.Preterite?.SecondPersonSingular || `${stem}iste`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ió`,
        FirstPersonPlural: irregularConjugations.Indicative?.Preterite?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Preterite?.SecondPersonPlural || `${stem}isteis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Preterite?.ThirdPersonPlural || `${stem}ieron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations.Indicative?.Imperfect?.FirstPersonSingular || `${stem}ía`,
        SecondPersonSingular: irregularConjugations.Indicative?.Imperfect?.SecondPersonSingular || `${stem}ías`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}ía`,
        FirstPersonPlural: irregularConjugations.Indicative?.Imperfect?.FirstPersonPlural || `${stem}íamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Imperfect?.SecondPersonPlural || `${stem}íais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}ían`
      },
      Future: {
        FirstPersonSingular: irregularConjugations.Indicative?.Future?.FirstPersonSingular || `${stem}iré`,
        SecondPersonSingular: irregularConjugations.Indicative?.Future?.SecondPersonSingular || `${stem}irás`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Future?.ThirdPersonSingular || `${stem}irá`,
        FirstPersonPlural: irregularConjugations.Indicative?.Future?.FirstPersonPlural || `${stem}iremos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Future?.SecondPersonPlural || `${stem}iréis`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Future?.ThirdPersonPlural || `${stem}irán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations.Indicative?.Conditional?.FirstPersonSingular || `${stem}iría`,
        SecondPersonSingular: irregularConjugations.Indicative?.Conditional?.SecondPersonSingular || `${stem}irías`,
        ThirdPersonSingular: irregularConjugations.Indicative?.Conditional?.ThirdPersonSingular || `${stem}iría`,
        FirstPersonPlural: irregularConjugations.Indicative?.Conditional?.FirstPersonPlural || `${stem}iríamos`,
        SecondPersonPlural: irregularConjugations.Indicative?.Conditional?.SecondPersonPlural || `${stem}iríais`,
        ThirdPersonPlural: irregularConjugations.Indicative?.Conditional?.ThirdPersonPlural || `${stem}irían`
      }
    }
  };
}