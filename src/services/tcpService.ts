import TcpSocket from 'react-native-tcp-socket';

class TcpService {
  public sendRequest() {
    const options = {
      port: 55443,
      host: 'yeelight://192.168.31.21',
      localAddress: 'yeelight://192.168.31.21',
      reuseAddress: true,
      // localPort: 20000,
      // interface: "wifi",
    };

    // Create socket
    const client = TcpSocket.createConnection(options, () => {
      // Write on the socket
      client.write('{"id":1,"method":"toggle","params":[]}\r\n');

      // Close socket
      client.destroy();
    });

    client.on('data', function (data) {
      console.log('message was received', data);
    });

    client.on('error', function (error) {
      console.log(error);
    });

    client.on('close', function () {
      console.log('Connection closed!');
    });
  }
}

export default new TcpService();
