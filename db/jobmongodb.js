const { MongoClient } = require("mongodb");

function myDB() {
	const myDB = {};

	const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

	myDB.getCaldata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobcalendar = db.collection("jobcalendar");
		const query = {};
		console.log(jobcalendar.find(query).toArray());
		return jobcalendar.find(query).toArray();
	};

	myDB.getAppDetails = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		const query = {};
		console.log(jobposts.find(query).toArray());
		return jobposts.find(query).sort({_id: -1}).toArray();
	};

	myDB.createAppPost = async (post) => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		return await jobposts.insert(post);
	};

	myDB.createAppEvent = async (post) => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		return await jobposts.insert(post);
	};

	myDB.delAppEvent = async (post) => {
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		var myquery = { "title" : post.title};
		console.log( "jobpostquery",jobposts.find(myquery));
		return await jobposts.deleteOne(myquery);
	};
	

	myDB.updateAppEvent = async (post) => {
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		var myquery = { "title" : post.title};
		var newvalues = { $set: {"title": post.title, "start": post.start, "end":post.end} };
		console.log( "jobpostquery",jobposts.find(myquery));
		return await jobposts.updateOne(myquery,newvalues);
	};

/*
	v
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
*/	
	/*return [
			{
				Stage: "Online Assesment",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
		];
	};*/

	return myDB;
}

module.exports = myDB();

// Replace the uri string with your MongoDB deployment's connection string.


