cd `dirname $0`
PLUGIN_TS=$PWD/node_modules/.bin/protoc-gen-ts.cmd
PLUGIN_GRPC=$PWD/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd
DIST_DIR=./src/protos

protoc \
--js_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--ts_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--grpc_out="${DIST_DIR}"/ \
--plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
--proto_path=./protos/ \
-I $DIST_DIR \
./protos/*.proto
