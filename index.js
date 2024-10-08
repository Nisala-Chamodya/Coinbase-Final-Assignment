const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
require("dotenv").config();
console.log(process.env.DB_USER); // remove this after you've confirmed it is working

//midleware
app.use(cors());
app.use(express.json());

//user name = nisalachamodya20
//password = wRM2MCdOMm9XR5Qw
//user credetiols

//start mongodbconfig

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `${process.env.DATABASEURL}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

//end mongodbconfig

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
