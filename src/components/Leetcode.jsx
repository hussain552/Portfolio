import React, { useState } from 'react';

const LeetCodeProblems = () => {
  const [username, setUsername] = useState('');
  const [easyProblems, setEasyProblems] = useState([]);
  const [mediumProblems, setMediumProblems] = useState([]);
  const [hardProblems, setHardProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProblems = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch('https://api.allorigins.win/get?url=https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `query getUserProfile($username: String!) {
                userProfile(username: $username) {
                  solvedQuestions {
                    question {
                      title
                      difficulty
                    }
                  }
                }
              }`,
              variables: { username },
            }),
          });
          

      const result = await response.json();
      const solvedQuestions = result.data.userProfile.solvedQuestions;

      const easy = solvedQuestions.filter(
        (item) => item.question.difficulty === 'Easy'
      );
      const medium = solvedQuestions.filter(
        (item) => item.question.difficulty === 'Medium'
      );
      const hard = solvedQuestions.filter(
        (item) => item.question.difficulty === 'Hard'
      );

      setEasyProblems(easy);
      setMediumProblems(medium);
      setHardProblems(hard);
    } catch (err) {
      setError('Failed to fetch problems. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchProblems();
    } else {
      setError('Please enter a username.');
    }
  };

  return (
    <div>
      <h1>LeetCode Problems</h1>

      {/* Input field and submit button */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter LeetCode Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Get Problems</button>
      </form>

      {/* Display loading, error, and problem lists */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display problems */}
      {!loading && !error && (
        <div>
          <h2>Easy Problems</h2>
          <ul>
            {easyProblems.map((problem, index) => (
              <li key={index}>{problem.question.title}</li>
            ))}
          </ul>

          <h2>Medium Problems</h2>
          <ul>
            {mediumProblems.map((problem, index) => (
              <li key={index}>{problem.question.title}</li>
            ))}
          </ul>

          <h2>Hard Problems</h2>
          <ul>
            {hardProblems.map((problem, index) => (
              <li key={index}>{problem.question.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeetCodeProblems;
