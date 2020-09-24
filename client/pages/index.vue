<template>
  <div class="container">
    <div>
      <h1>Hello World!!</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { } from 'grpc-web'
import { GreeterClient } from '../assets/protos/hello_grpc_web_pb'
import { HelloRequest } from '../assets/protos/hello_pb'

export default Vue.extend({
  data() {
    return {
      client: new GreeterClient(`http://localhost:8080`, null, null),
    }
  },
  created() {
    const request = new HelloRequest()
    request.setId(10)
    request.setName('Taro')
    this.client.sayHello(request, {}, (err, response) => {
      if (!err) {
        console.log(response.getMessage())
      } else {
        console.error(err)
      }
    })
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
