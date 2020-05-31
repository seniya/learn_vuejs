<template>
  <div>
    <form @submit.prevent="onSubminForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도 {{tries.length}}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
    <div>정답: {{answer}}</div>
  </div>
</template>

<script>
const getNumber = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumber(), // [1,5, 3, 3]
      tries: [],
      value: "",
      result: ""
    };
  },
  methods: {
    onSubminForm(e) {
      console.log("this.answer : ", this.answer);
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런"
        });
        this.result = "홈런";
        alert("게임완료");
        this.answer = getNumber();
        this.tries = [];
      } else {
        if (this.tries.length >= 4) {
          this.result = "4번 넘게 틀려서 실패.";
          alert("실패");
          this.answer = getNumber();
          this.tries = [];
        } else {
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split("").map(v => parseInt(v));
          for (let i = 0; i < 4; i++) {
            if (answerArray[i] === this.answer[i]) {
              strike++;
            } else if (this.answer.includes(answerArray[i])) {
              ball++;
            }
          }

          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크. ${ball}볼 입니다. `
          });
        }
      }

      this.value = "";
      this.$refs.answer.focus();
    }
  }
};
</script>

<style scoped>
</style>