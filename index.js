const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('748572003686154282')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=81-tahjXB4I&list=RD81-tahjXB4I&start_radio=1') //Must be a youtube video link 
    .setState('Valorant')
    .setName('airis')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.pinimg.com/736x/60/24/d0/6024d08003645ade9542ba62a76040cf.jpg') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('prem accs , nitros & game creds') //Text when you hover the Large image
    .setAssetsSmallImage('https://discord.com/channels/916601738499342346/1167525454308180030/1311069321946071211') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit dc shop!') //Text when you hover the Small image
    .addButton('shop', 'https://discord.gg/airiswin')
    .addButton('vouches', 'https://discord.gg/airiswin');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `.gg/airiswin`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
