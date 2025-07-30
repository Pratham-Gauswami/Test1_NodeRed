module.exports = function(RED) {
    function ClickTrackerNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            // Expect input msg.payload = "node1", "node2", ..., "node20"
            const sourceId = msg.payload || "unknown";

            msg.payload = `Clicked: ${sourceId}`;
            node.send(msg);
        });
    }
    RED.nodes.registerType("click-tracker", ClickTrackerNode);
}
