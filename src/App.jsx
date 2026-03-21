import { useEffect, useState } from 'react'
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import MyExperiences from './components/MyExperiences/MyExperiences';
import CVPreview from './components/CVPreview/CVPreview';
import ProgressBar from './components/ui/progressBar';
export default function App() {
  const [page, setPage] = useState(1)
  const [generalInfo, setGeneralInfo] = useState(GeneralInfo.empty());
  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [referenceList, setReferenceList] = useState([]);

  function nextPage () {
    setPage((prev) => prev + 1)
  }

  function previousPage () {
    setPage((prev) => prev - 1)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  let currentPage;

  if (page === 1) {
    currentPage = (
      <GeneralInfo 
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        onNext={nextPage} 
      />
    )
  }

  if (page === 2) {
    currentPage = (
      <MyExperiences 
        educationList={educationList}
        setEducationList={setEducationList}
        workList={workList}
        setWorkList={setWorkList}
        skillList={skillList}
        setSkillList={setSkillList}
        referenceList={referenceList}
        setReferenceList={setReferenceList}
        onNext={nextPage} 
        onPrevious={previousPage} 
      />
    )
  }

  if (page === 3) {
    currentPage = (
      <CVPreview
        generalInfo={generalInfo}
        educationList={educationList}
        workList={workList}
        skillList={skillList}
        referenceList={referenceList}
        onPrevious={previousPage}
      />
    )
  }

  return (
    <div className="app">
      <div className="app__content">

        <div className="app__header">
          <h1>{page === 1 ? 'Personal Details' : page === 2 ? 'My Experiences' : page === 3 ? 'Select Template' : ''}</h1>
          <p>Build your CV step by step and preview it in real time.</p>
        </div>

        <ProgressBar currentStep={page} onStepClick={setPage} />

        {currentPage}
      </div>
    </div>
  )
}



