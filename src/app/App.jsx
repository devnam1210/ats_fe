import react from 'react';
import ViewJobListPage from '../features/jobs/pages/ViewJobListPage';
import CandidateLogin from '../features/auth/pages/CandidateLogin';

function App() {
  // Logic

  // UI
  return (
    <>
    {/* <ViewJobListPage /> */}
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <CandidateLogin />
    </div>
    </>
    
  );
}

export default App;