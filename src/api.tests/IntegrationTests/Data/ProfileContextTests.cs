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
      sut = new ProfileContext();
    }

    [Test]
    public async Task Given_An_Id_That_DoesNotExists_When_Getting_A_Profile_Then_Returns_An_Empty_Profile()
    {
      var expectedProfile = new Profile();
      var userId = "0";

      var profile = await sut.Get(userId);

      profile.Should().BeEquivalentTo(expectedProfile);
    }

    [Test]
    public async Task Given_Nothing_When_Getting_Profiles_Then_Returns_A_Collection_Of_Profiles()
    {
      var profiles = await sut.Get();

      profiles.Should().BeAssignableTo<IEnumerable<Profile>>();
    }

  }
}
