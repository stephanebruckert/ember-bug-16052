export default function(server) {
  let dummy = server.create('dummy');
  server.create('sub', {
    dummy
  });
}
