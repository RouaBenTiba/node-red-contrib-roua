module.exports = function (RED) {
  function RouaNode(config) {
    RED.nodes.createNode(this, config);

    var node = this;

    node.on("input", function (msg) {
      msg.payload = "Roua";
      node.send(msg);
    });
  }

  RED.nodes.registerType("roua", RouaNode);
};
