using MongoDB.Driver;

namespace api.Data
{
  public interface IMongoDbFactory
  {
    IMongoClient MongoClient(string connectionString);
  }

  public class MongoDbFactory : IMongoDbFactory
  {
    public IMongoClient MongoClient(string connectionString) => new MongoClient(connectionString);
  }
}
