import { Server, ServerCredentials, ServerUnaryCall } from "grpc";

import { GreeterService } from "./protos/hello_grpc_pb";
import { HelloReply, HelloRequest } from "./protos/hello_pb";

const grpcServer: Server = new Server();

const sayHello = async (
  call: ServerUnaryCall<HelloRequest>,
  callback: any
): Promise<void> => {
  const request: HelloRequest = call.request;

  const reply = new HelloReply();
  reply.setMessage(`Hello ${request.getName()}! (ID: ${request.getId()})`);
  callback(null, reply);
};

grpcServer.addService(GreeterService, {
  sayHello,
});

grpcServer.bind("localhost:50051", ServerCredentials.createInsecure());
console.log("gRPC server running at http://localhost:50051");
grpcServer.start();
