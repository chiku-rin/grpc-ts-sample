cd `dirname $0`

# for server
PLUGIN_TS=$PWD/server/node_modules/.bin/protoc-gen-ts.cmd
PLUGIN_GRPC=$PWD/server/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd
SERVER_DIST_DIR=./server/src/protos/
protoc \
--js_out=import_style=commonjs,binary:"${SERVER_DIST_DIR}"/ \
--ts_out="${SERVER_DIST_DIR}"/ \
--grpc_out="${SERVER_DIST_DIR}"/ \
--plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
--proto_path=./protos/ \
-I $SERVER_DIST_DIR \
./protos/*.proto

# for client
CLIENT_DIST_DIR=./client/assets/protos/
protoc \
--js_out=import_style=commonjs,binary:"${CLIENT_DIST_DIR}"/ \
--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:"${CLIENT_DIST_DIR}"/ \
--proto_path=./protos/ \
-I $CLIENT_DIST_DIR \
./protos/*.proto
