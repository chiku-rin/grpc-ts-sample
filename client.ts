import { credentials, ServiceError } from "grpc";

import { GreeterClient, IGreeterClient } from "./src/protos/hello_grpc_pb";
import { HelloReply, HelloRequest } from "./src/protos/hello_pb";

const client: IGreeterClient = new GreeterClient(
  `localhost:50051`,
  credentials.createInsecure()
);

const request: HelloRequest = new HelloRequest();
request.setId(1);
request.setName("Taro");

client.sayHello(request, (error: ServiceError | null, response: HelloReply) => {
  if (!error) {
    console.log(response.getMessage());
  } else {
    console.error(error);
  }
});
