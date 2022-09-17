import dgram from 'react-native-udp';

class UdpService {
  public sendRequest() {
    const socket: any = dgram.createSocket({
      type: 'udp4',
    });
    socket.bind(12345);
    socket.once('listening', function () {
      socket.send(
        `M-SEARCH * HTTP/1.1\r\n
        HOST:239.255.255.250:1982\r\n
        MAN:\"ssdp:discover\"\r\n
        ST:wifi_bulb\r\n
        `,
        undefined,
        undefined,
        1982,
        '239.255.255.250',
        function (err) {
          if (err) throw err;

          console.log('Message sent!');
        },
      );
    });

    socket.on('message', function (msg, rinfo) {
      var textChunk = msg.toString('utf8');
      console.log('Message received', textChunk);
    });
  }
}

export default new UdpService();
