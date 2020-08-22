using api.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Data
{
  public interface IProfileContext
  {
    Task<Profile> Get(string id);
    Task<List<Profile>> Get();
  }

  public class ProfileContext : IProfileContext
  {
    private readonly IMongoCollection<Profile> profileCollection;
    public ProfileContext(IMongoDbFactory dbFactory, IResumeDatabaseSettings resumeDatabaseSettings)
    {
      var client = dbFactory.MongoClient(resumeDatabaseSettings.ConnectionString);
      var database = client.GetDatabase(resumeDatabaseSettings.DatabaseName);
      profileCollection = database.GetCollection<Profile>(resumeDatabaseSettings.ResumeCollectionName);
    }

    public Task<Profile> Get(string id)
    {
      return profileCollection.Find(p => p.Id == id).FirstAsync();
    }

    public Task<List<Profile>> Get()
    {
      return profileCollection.Find(Builders<Profile>.Filter.Empty).ToListAsync();
    }
  }
}
