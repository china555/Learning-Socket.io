<template>
  <div>
    <div class="name-area">
      <div class="name">awdawdawd</div>
    </div>
    <ul id="messages"></ul>
    <form action>
      <input id="m" autocomplete="off" />
      <button>Send</button>
    </form>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.name {
  color: #eee;
  font-size: 16px;
  align-self: center;
}
.name-area {
  display: flex;
  justify-content: center;
  width: 80vw;
  background-color: rgb(35, 37, 37);
  height: 6vh;
}
body {
  font: 13px Helvetica, Arial;
}

form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

form input {
  border: 0;
  padding: 10px;
  width: 70%;
  margin-right: 0.5%;
}

form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages li {
  padding: 5px 10px;
}

#messages li:nth-child(odd) {
  background: #eee;
}
</style>
