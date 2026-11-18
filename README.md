# node-red-contrib-roua

## Overview

This is a custom Node-RED node developed as part of an IoT practical assignment.

This node receives an input message and replaces its payload with the constant string "Roua".

Regardless of the input value, the node always returns "Roua".

## How to use

1. Add the Roua node to your Node-RED flow.
2. Connect an Inject node to the Roua node.
3. Connect a Debug node to the Roua node.
4. Click Deploy.
5. Execute the Inject node.
6. The output displayed in the Debug panel is "Roua".

## Requirements

- Node.js
- Node-RED

## License

ISC
