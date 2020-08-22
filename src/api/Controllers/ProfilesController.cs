using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProfilesController : ControllerBase
  {
    private readonly IProfileContext profileContext;
    public ProfilesController(IProfileContext profileContext)
    {
      this.profileContext = profileContext;
    }

    [HttpGet]
    public Task<List<Profile>> Get()
    {
      return profileContext.Get();
    }

    [HttpGet]
    [Route("{id:int}")]
    public Task<Profile> Get(string id)
    {
      return profileContext.Get(id);
    }
  }
}
