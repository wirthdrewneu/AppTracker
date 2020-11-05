const { MongoClient, ObjectId } = require("mongodb");

//I like the way your type your code, it is super clear for me to understand.
//and the way you named each functions is wonderful, for example getCaldata tells me that this is a function extracting data from MongoDB.
//the layout your code is awesome, i have nothing to complain. 

function myDB() {
	const myDB = {};

	//From MongoDB atlas:

	// const MongoClient = require('mongodb').MongoClient;
	const uri = "mongodb+srv://harman:pass@cluster0.zk2xm.mongodb.net/<dbname>?retryWrites=true&w=majority";
	// const client = new MongoClient(uri, { useNewUrlParser: true });
	// client.connect(err => {
	// const collection = client.db("test").collection("devices");
	// // perform actions on the collection object
	// client.close();
	// });


	// const uri = process.env.MONGO_URL || "mongodb://harman:pass@cluster0.zk2xm.mongodb.net/test";
	// const uri = "mongodb://harman:pass@cluster0.zk2xm.mongodb.net/test";

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
		return jobposts.find(query).sort({ _id: -1 }).toArray();
	};

	myDB.createAppPost = async (post) => {
		console.log("created post:", post);
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
		var myquery = { title: post.title };
		console.log("jobpostquery", jobposts.find(myquery));
		return await jobposts.deleteOne(myquery);
	};

	myDB.delApplication = async (post) => {
		console.log("Post_id", post._id, post.Company);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		var myquery = { _id: ObjectId(post._id) };
		// console.log( "jobpostquery", jobposts.find(myquery));
		let dbResponse = {
			success: true,
			message: "Record Deleted Successfully",
		};
		try {
			await jobposts.deleteOne(myquery);
		} catch (error) {
			console.log(error);
			dbResponse = {
				success: false,
				message: error,
			};
			return dbResponse;
		}
		return dbResponse;
	};

	myDB.updateAppEvent = async (post) => {
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		var myquery = { title: post.title };
		var newvalues = {
			$set: { title: post.title, start: post.start, end: post.end },
		};
		console.log("jobpostquery", jobposts.find(myquery));
		return await jobposts.updateOne(myquery, newvalues);
	};

	//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {

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
