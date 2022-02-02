import { PeerServer } from "peer";
const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);

const peerServer = PeerServer({port: 8521, path: '/', generateClientId: customGenerationFunction});