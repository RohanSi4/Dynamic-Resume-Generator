import React, { useState } from 'react';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    resume: '',
    jobDescription: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Firebase function call will go here
      console.log('Submitting:', formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="resume-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="resume">Your Resume</label>
          <textarea
            id="resume"
            value={formData.resume}
            onChange={(e) => setFormData(prev => ({...prev, resume: e.target.value}))}
            placeholder="Paste your resume here..."
            rows={10}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            value={formData.jobDescription}
            onChange={(e) => setFormData(prev => ({...prev, jobDescription: e.target.value}))}
            placeholder="Paste the job description here..."
            rows={10}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze Resume'}
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default ResumeForm; 