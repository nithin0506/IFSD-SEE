const express = require('express');
const app = express();

app.use(express.json());

class Politician {
  constructor(name) {
    this.name = name;
    this.votes = 0;
  }
}

class Election {
  constructor() {
    this.politicians = [];
  }

  addPolitician(politician) {
    this.politicians.push(politician);
  }

  recordVotes(votesPerPolitician) {
    for (const politician of this.politicians) {
      politician.votes = votesPerPolitician;
    }
  }

  calculateTotalVotes() {
    let totalVotes = 0;

    for (const politician of this.politicians) {
      totalVotes += politician.votes;
    }

    return totalVotes;
  }
}

const election = new Election();

app.post('/election', (req, res) => {
  const { politicians, votesPerPolitician } = req.body;

  for (const politicianName of politicians) {
    const politician = new Politician(politicianName);
    election.addPolitician(politician);
  }

  election.recordVotes(votesPerPolitician);

  const totalVotes = election.calculateTotalVotes();
  res.json({ totalVotes });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

