import * as grpcWeb from 'grpc-web';

import * as hello_pb from './hello_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: hello_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<hello_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<hello_pb.HelloReply>;

}

