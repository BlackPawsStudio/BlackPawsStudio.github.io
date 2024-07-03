import { useLocation } from "react-router-dom";
import HomePage from "./pages";
import GalleryPage from "./pages/gallery";
import { useEffect, useState } from "react";
import { demos } from "./utils/data";

const App = () => {
  const [step, setStep] = useState<"home" | "gallery">("home");
  const [preselectedProject, setPreselectedProject] = useState<string | null>(
    null
  );

  const { hash } = useLocation();

  useEffect(() => {
    const hashName = hash.slice(1);
    const projectsArr = Object.values(demos)
      .flat()
      .map((el, id) => {
        el.id = id;
        return el;
      })
      .reverse();
    const project = projectsArr.find(
      (proj) =>
        proj.name.replaceAll(" ", "-").toLowerCase() ===
        hashName.replaceAll(" ", "-").replaceAll("%20", "-").toLowerCase()
    );
    if (project) {
      setPreselectedProject(project.name);
      setStep("gallery");
    }
  }, [hash]);

  return step === "home" ? (
    <HomePage setStep={() => setStep("gallery")} />
  ) : (
    <GalleryPage
      goToHome={() => setStep("home")}
      preselectedProjectName={preselectedProject}
    />
  );
};

export default App;
