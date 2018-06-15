module.exports = {
  tags: ['tomcat'],
  '@disabled': false,

  'Test scotts web app' : function (client) {
    client
      .url('http://localhost:8080/helloworld')
      .pause(1000);

    client.expect.element('title').to.be.present;
    client.expect.element('body').to.be.present;
    client.expect.element('h1').to.be.present;

    client.assert.title('Hello World');
    client.assert.containsText('body', 'Hello, World!')
    client.assert.containsText('body', 'Server Address')
    client.assert.containsText('body', 'Java Version:')
    client.assert.containsText('body', 'Operating System Name: Linux')

    client.end();
  }
};
