/**
 * Copyright 2013, 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";
    function B64EncodeNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.on("input", function(msg) {
		msg.original_payload=msg.payload;
		msg.payload=new Buffer(msg.payload).toString('base64');
          	node.send(msg);
        });
     	return node; 
   }
   function B64DecodeNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.on("input", function(msg) {
                msg.original_payload=msg.payload;
                msg.payload=new Buffer(msg.payload, 'base64').toString('utf-8');;
                node.send(msg);
        });
        return node;
   }
   RED.nodes.registerType("btoa",B64EncodeNode);
   RED.nodes.registerType("atob",B6Decode4Node);
};
