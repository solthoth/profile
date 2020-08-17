using api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Data
{
  public interface IProfileContext
  {
    Task<Profile> Get(string id);
    Task<IEnumerable<Profile>> Get();
  }

  public class ProfileContext : IProfileContext
  {
    public Task<Profile> Get(string id)
    {
      return Task.Run(() => new Profile());
    }

    public Task<IEnumerable<Profile>> Get()
    {
      return Task.Run<IEnumerable<Profile>>(() => new List<Profile>());
    }
  }
}
