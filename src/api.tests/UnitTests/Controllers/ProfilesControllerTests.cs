using api.Controllers;
using api.Data;
using api.Models;
using FluentAssertions;
using NSubstitute;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.tests.UnitTests.Controllers
{
  [TestFixture]
  public class Tests
  {
    private ProfilesController sut;
    private IProfileContext profileContext;

    [SetUp]
    public void Setup()
    {
      profileContext = Substitute.For<IProfileContext>();
      sut = new ProfilesController(profileContext);
    }

    [Test]
    public async Task Given_Nothing_When_Getting_Profiles_Then_Returns_ProfileCollection()
    {
      var users = await sut.Get();

      users.Should().BeAssignableTo<IEnumerable<Profile>>();
    }

    [Test]
    public async Task Given_A_Profile_Id_When_Getting_Profiles_Then_Returns_Specified_Profile()
    {
      var userId = "1";
      var expectedUser = new Profile {
        Id = userId,
        FirstName = "Carlos",
        LastName = "Barajas"
      };
      profileContext.Get(userId).Returns(expectedUser);

      var user = await sut.Get(userId);

      user.Should().BeEquivalentTo(expectedUser);
    }
  }
}
