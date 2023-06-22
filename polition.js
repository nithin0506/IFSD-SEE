const prompt = require('prompt-sync')();
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
  
    recordVotes() {
      const numberOfPoliticians = this.politicians.length;
      const votesPerPolitician = parseInt(prompt('Enter the number of votes per politician: '));
  
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
  
  function main() {
    const election = new Election();
  
    const politician1 = new Politician('Politician 1');
    const politician2 = new Politician('Politician 2');
    const politician3 = new Politician('Politician 3');
  
    election.addPolitician(politician1);
    election.addPolitician(politician2);
    election.addPolitician(politician3);
  
    election.recordVotes();
  
    const totalVotes = election.calculateTotalVotes();
    console.log('Total number of votes:', totalVotes);
  }
  
  main();
  