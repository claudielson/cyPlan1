/*const { createApp } = Vue;

createApp({
  data() {
    return {
      submissions: Seed.submissions // Seed.submissions deve ser definido em outro lugar
    };
  },
  computed: {
    sortedSubmissions() {
      // Usando slice() para evitar modificar o array original
      return [...this.submissions].sort((a, b) => b.votes - a.votes);
    }
  }
}).mount('#app');*/


const { createApp } = Vue;

createApp({
  data() {
    return {
      submissions: Seed.submissions
    };
  },
  computed: {
    sortedSubmissions() {
      return [...this.submissions].sort((a, b) => b.votes - a.votes);
    }
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(s => s.id === submissionId);
      if (submission) {
        submission.votes++;
      }
    }
  }
}).mount('#app');