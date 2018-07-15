using IntelligentKioskSample.Views;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Xml.Serialization;

namespace IntelligentKioskSample
{
    public class MongoHelper
    {
        //private string dbName = "traze";
        //private string collectionName = "crowd";
        //MongoHelper mongoHelper;

        //public MongoHelper()
        //{
        //    mongoHelper = new MongoHelper();
        //}

        public void CreateTask(Visitor visitor)
        {
            string connectionString =
@"mongodb://traze:QFrMAmNsUF1FVM2MQ48GrIW94Hr8Lg7es8HLaEfXPWLgnEJ4ITkOENdkEGN3oueihckFm9h0L9ysa7EKUpl29g==@traze.documents.azure.com:10255/traze?ssl=true&replicaSet=globaldb";
            MongoClientSettings settings = MongoClientSettings.FromUrl(
              new MongoUrl(connectionString)
            );
            settings.SslSettings =
              new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var mongoClient = new MongoClient(settings);

            var database = mongoClient.GetDatabase("traze");
            //CREATE  
            var visitorCollection = database.GetCollection<BsonDocument>("crowd");
            BsonElement uniqueId = new BsonElement("uniqueId", visitor.UniqueId);
            BsonElement count = new BsonElement("count", visitor.Count);
            BsonElement category = new BsonElement("category", visitor.Category);
            BsonElement capturedDate = new BsonElement("capturedDate", visitor.CapturedDate);
            BsonElement location = new BsonElement("location", visitor.Location);
            BsonElement type = new BsonElement("type", visitor.Type);
            BsonDocument visitorDoc = new BsonDocument();
            visitorDoc.Add(uniqueId);
            visitorDoc.Add(count);
            visitorDoc.Add(category);
            visitorDoc.Add(capturedDate);
            visitorDoc.Add(type);
            visitorDoc.Add(location);

            visitorCollection.InsertOne(visitorDoc);
        }

    }
}
