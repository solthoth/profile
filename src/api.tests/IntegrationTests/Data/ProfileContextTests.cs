using api.Data;
using api.Models;
using FluentAssertions;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.tests.IntegrationTests.Data
{
  [TestFixture]
  public class ProfileContextTests
  {
    private ProfileContext sut;

    [SetUp]
    public void SetUp()
    {
      var settings = new ResumeDatabaseSettings {
        ConnectionString = "mongodb://root:S%40Str0ng!@localhost",
        DatabaseName = "resume",
        ResumeCollectionName = "profiles"
      };
      var factory = new MongoDbFactory();
      sut = new ProfileContext(factory, settings);
    }

    [Test]
    public async Task Given_An_Id_That_DoesNotExists_When_Getting_A_Profile_Then_Returns_An_Empty_Profile()
    {
      var userId = "5f40c40f656ab639d2932cf6";
      var expectedProfile = new Profile {
        Id = userId,
        FirstName = "Carlos",
        LastName = "Barajas"
      };

      var profile = await sut.Get(userId);

      profile.Should().BeEquivalentTo(expectedProfile);
    }

    [Test]
    public async Task Given_Nothing_When_Getting_Profiles_Then_Returns_A_Collection_Of_Profiles()
    {
      var profiles = await sut.Get();

      profiles.Should().BeAssignableTo<List<Profile>>();
    }

  }
}
