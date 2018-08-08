//memanggil package
const Discord 	= require('discord.js');
const bot 		= new Discord.Client();
const config 	= require('./config.json');
//membuat konstanta
const logo = "https://images-ext-1.discordapp.net/external/-kbpPhLHQJTdG1umPj8tflumFhZdKLrUX2xD3_vUgG8/%3Fsize%3D128/https/cdn.discordapp.com/icons/380377459578634240/da71766a341458a508dfd132915d7a32.jpg";

//coding
bot.on("ready", async() => {
	console.log(`${bot.user.username} Sudah online!`);
	bot.user.setActivity("Sedang dalam pengkodean", {type: "PLAYING"});
})

bot.on("message", async message => {
	//config messege
	var sender 	= 	message.author; // pengirim
	var msg 	=	message.content.toUpperCase(); //ambil pesan

	//ketentuan khusus
	if (message.author.bot) return; // bot tidak bisa menggunakan bot
	if (message.channel.type === "dm") return; // bot tidak bisa bermesraan sama user di dm

	//exsekusi ping
	if(msg === config.prefix + "PING")
	{
		var ping 	= bot.ping; //menaruh nilai ping
		var embed 	= new Discord.RichEmbed()
	    			.setDescription('**'+sender+'** your Ping is ' + Math.round(ping) + 'ms')
	    			.setColor('random');

		message.channel.send(embed); //mengirim isi dari embed
	} //ping command
	else if (msg === config.prefix + "HELP") //command help
	{
		const embed = new Discord.RichEmbed()
		  .setTitle("yukihana team")
		  .setColor('random')
		  .setDescription("pusat bantuan bot yukihana team")
		  .setFooter("yukihana team © 2018", logo)
		  .setThumbnail(logo)
		  .addField("yukihana team information","gunakan ``>`` untuk menggunakan fitur dari bot ini")
		  .addField("member","menampilkan daftar member yukihana team \n```(command ini bersifat spam mohon di gunakan di channel khusus)```")
		  .addField("admin","menampilkan daftar admin yukihana team \n```fitur ini masih dalam proses```")
		  .addField("testing","menampilkan daftar testing member yukihana team \n```fitur ini masih dalam proses``` \n \n")
		  .addField("event","menampilkan daftar event yang di adakan yukihana team \n```contoh: audisi,contest,dll```")

		  message.channel.send({embed});
	}
	else if (msg === config.prefix + "MEMBER") //command member
	{
		//membuat konstanta
		const member = require('./data.json');
		const member_url = "https://www.youtube.com/channel/UCjNqQcxR4IOOvx-GSgHxj8A/channels?shelf_id=4&view=49";

		//perulangan
		for(var i = 0; i < member.member.length; i++)
		{
			const embed = new Discord.RichEmbed()
			  .setTitle("yukihana team member")
			  .setColor('random')
			  .setDescription("member tercinta yukihana team yang ayaka cintai")
			  .setFooter("yukihana team © 2018", logo)
			  .setThumbnail(member.member[i].picture)
			  .setURL(member_url)
			  .addField(member.member[i].nickname + "\nstatus di team : " + member.member[i].status + "\nkondisi : " + member.member[i].kondisi ,
			    "[youtube](" + member.member[i].youtube + ") \n [facebook](" + member.member[i].facebook + ") \n [instagram](" + member.member[i].instagram + ")")

			  message.channel.send({embed});
		}
	}
	else if (msg === config.prefix + "ADMIN") //command admin
	{
		//membuat konstanta
		const member = require('./data.json');
		const member_url = "https://www.youtube.com/channel/UCjNqQcxR4IOOvx-GSgHxj8A/channels?shelf_id=4&view=49";

		//perulangan
		for(var i = 0; i < member.admin.length; i++)
		{
			const embed = new Discord.RichEmbed()
			  .setTitle("yukihana team member")
			  .setColor('random')
			  .setDescription("member tercinta yukihana team yang ayaka cintai")
			  .setFooter("yukihana team © 2018", logo)
			  .setThumbnail(member.admin[i].picture)
			  .setURL(member_url)
			  .addField(member.admin[i].nickname + "\nstatus di team : " + member.admin[i].status + "\nkondisi : " + member.admin[i].kondisi ,
			    "[youtube](" + member.admin[i].youtube + ") \n [facebook](" + member.admin[i].facebook + ") \n [instagram](" + member.admin[i].instagram + ")")

			  message.channel.send({embed});
		}
	}
	else if (msg === config.prefix + "STAFF") //command staff
	{
		//membuat konstanta
		const member = require('./data.json');
		const member_url = "https://www.youtube.com/channel/UCjNqQcxR4IOOvx-GSgHxj8A/channels?shelf_id=4&view=49";

		//perulangan
		for(var i = 0; i < member.staff.length; i++)
		{
			const embed = new Discord.RichEmbed()
			  .setTitle("yukihana team member")
			  .setColor('random')
			  .setDescription("member tercinta yukihana team yang ayaka cintai")
			  .setFooter("yukihana team © 2018", logo)
			  .setThumbnail(member.staff[i].picture)
			  .setURL(member_url)
			  .addField(member.staff[i].nickname + "\nstatus di team : " + member.staff[i].status + "\nkondisi : " + member.staff[i].kondisi ,
			    "[youtube](" + member.staff[i].youtube + ") \n [facebook](" + member.staff[i].facebook + ") \n [instagram](" + member.staff[i].instagram + ")")

			  message.channel.send({embed});
		}
	}
	else if (msg === config.prefix + "OFFICIAL") //command staff
	{
		//membuat konstanta
		const member = require('./data.json');
		const member_url = "https://www.youtube.com/channel/UCjNqQcxR4IOOvx-GSgHxj8A/channels?shelf_id=4&view=49";

		//perulangan
		for(var i = 0; i < member.official.length; i++)
		{
			const embed = new Discord.RichEmbed()
			  .setTitle("yukihana team member")
			  .setColor('random')
			  .setDescription("daftar official akun yukihana team, jangan sampe salah ya kak")
			  .setFooter("yukihana team © 2018", logo)
			  .setThumbnail(member.official[i].picture)
			  .setURL(member_url)
			  .addField("daftar official akun yukihana team",
			    "[youtube](" + member.official[i].youtube + ") \n [facebook-official](" + member.official[i].facebook + ") \n [facebook-shitposting](" + member.official[i].instagram + ") \n [bilibili](" + member.official[i].bilibili + ") \n [yuki comic-coming soon](#) \n [yuki news-coming soon](#)")

			  message.channel.send({embed});
		}
	}

});

//login
bot.login(config.token);
